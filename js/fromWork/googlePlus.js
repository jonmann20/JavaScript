gPlus = function () {
    var clientId = '417643230486.apps.googleusercontent.com';
    var apiKey = 'AIzaSyAZ_Yq83aWy-9GEwlN7sGzpTq98Z4dLuiU';
    var scopes = 'https://www.googleapis.com/auth/plus.me';

    function handleClientLoad() {           // callback from google script request
        if (typeof (gapi.client) !== 'undefined') {
            gapi.client.setApiKey(apiKey)
            window.setTimeout(checkAuth, 1)
        }
        else {
            window.setTimeout(handleClientLoad, 1)
        }
    }

    function checkAuth() {
        gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
    }

    function handleAuthResult(authResult) {
        var btn = $('.gPlus')
        if (authResult && !authResult.error) {
            //btn.hide()
            makeApiCall()
        }
        else {
            //btn.show()

            btn.on('click', function (e) {
                e.preventDefault()
                handleAuthClick()
            })
        }
    }

    function handleAuthClick(event) {
        gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: false }, handleAuthResult);
        return false;
    }

    function makeApiCall() {
        gapi.client.load('plus', 'v1', function () {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });

            request.execute(function (resp) {
                console.log(resp)

                gPlus.uID = resp.id
                $(document).trigger('gPlusApi')

                //https://picasaweb.google.com/data/feed/api/user/userID

            });
        });
    }

    return {
        uID: -1,

        init: function () {

            $.ajax({
                url: 'https://apis.google.com/js/client.js',
                dataType: 'script',
                success: handleClientLoad
            })

            //$.ajax({
            //    url: 'https://apis.google.com/js/plusone.js',
            //    dataType: 'script',
            //    success: function () {
            //        console.log(gapi)
            //    }
            //})

            $(document).on('gPlusApi', function(){

                console.log(gPlus.uID)
            })

        }
    }

}()
