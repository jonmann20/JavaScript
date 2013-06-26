FindInviteFriends = function () {
    var that = null,
        numFriends = 10,
        alreadyCached = false;  // prevents multiple requests to cache 

    /*
        EFFECTS: removes the friends who use YearlyMe from the list of all facebook friends
                 a - b
    */
    function setDifference(a, b) {  // TODO: should modify 'a' directly instead of constructing new array and copying/overwriting
        var result = [];

        var i = 0, n = a.length,
            j = 0, m = b.length;

        while (i != n && j != m) {
            //console.log(a[i].id + ' ?= ' + b[j].Item2);

            if (a[i].id < b[j].Item2) {
                result.push({
                    id: a[i].id,
                    pic: a[i].pic
                });
                ++i;
            }
            else if (b[j].Item2 < a[i].id) {
                ++j;
            }
            else { // equal
                ++i;
                ++j;
            }
        }

        return result;
    }

    return {
        init: function () {
            if ($('#loginPanel').length > 0) {
                jAlert('Must be logged in.');
                return;
            }

            /*
                suggestList: user's friends who are NOT on YearlyMe || all user's friends (if not cached)
                    id: facbook ids
                    pic: facebook profile pictures

                dbList: user's friends who are on YearlyMe
                    Item1: YearlyMe usernames
                    Item2: facebook ids
            */
            FbClass.getFriends(numFriends, function (suggestList, uncached) {    // get user's friends
                //console.log(suggestList);

                FbClass.getDatabaseFbFriends(suggestList, function (dbList) {    // search database for YearlyMe friends
                    //console.log(dbList);

                    //----------- Filter YearlyMe friends ----------\\
                    if (uncached && dbList.length > 0) {
                        suggestList = setDifference(suggestList, dbList);
                    }

                    var topN = (dbList.length < numFriends) ? dbList.length : numFriends,
                        sugN = (suggestList.length < numFriends) ? suggestList.length : numFriends,
                        str = '<div class="addFriends noselect">\
                                <header>\
                                    <h1>Find or Invite Friends:</h1>\
                                </header>\
                                <div class="strap"></div>\
                                <div class="main">\
                                    <h2 class="ymHdr">Find Facebook Friends on YearlyMe:</h2>\
                                    <div class="ymFriendWrap clearfix">\
                        ';

                    // on YearlyMe:
                    for (var i = 0; i < dbList.length; ++i) {
                        str += '<a class="ymFriend" href="' + yearlyMe.baseURL + dbList[i].Item1 + '" target="_blank">\
                                    <img class="friendImg" src="' + FbClass.getPicByID(dbList[i].Item2) + '" />\
                                    <span class="name">' + dbList[i].Item1 + '\
                                </a>';
                    }

                    // Suggest to YearlyMe
                    str += '</div><div class="hr"><hr /></div>\
                            <h2>Invite Facebook Friends to YearlyMe:</h2>\
                            <div class="suggestWrap">';

                    // TODO: amortize creating/loading images by page (possible to request all pics at once??)
                    // ?redirect=false to get the correct url???

                    var maxN = (suggestList.length > 50) ? 50 : suggestList.length;

                    for (var i = 0; i < maxN; ++i) {
                        str += '<img class="friendImg" src="' + suggestList[i].pic + '" />';
                    }

                    //str += '<a href="#" class="button suggestFriends">Suggest Friends</a>';
                    str += '</div>\
                            </div>\
                        </div>';


                    //---------- open pop-up and setup new click events ----------\\
                    $.colorbox({
                        html: str,
                        width: 961,
                        maxWidth: 961,
                        className: 'addFriendsWrap',
                        //innerWidth: 970,
                        //innerHeight: 475,
                        onComplete: function () {

                            $('.ymFriendWrap').bxSlider({
                                slideWidth: 68,
                                minSlide: topN,
                                maxSlides: topN,
                                slideMargin: 15,
                                infiniteLoop: false,
                                prevSelector: '.addFriends',
                                nextSelector: '.addFriends',
                                hideControlOnEnd: true,
                                pager: false,
                                fbImg: true // custom option
                            });

                            $('.suggestWrap').bxSlider({
                                slideWidth: 68,
                                minSlide: sugN,
                                maxSlides: sugN,
                                slideMargin: 15,
                                infiniteLoop: false,
                                prevSelector: '.addFriends',
                                nextSelector: '.addFriends',
                                hideControlOnEnd: true,
                                //pager: false,
                                fbImg: true // custom option
                            });

                            $('.bx-wrapper').last().addClass('last');
                            $('.bx-prev').last().css({ top: 290 });
                            $('.bx-next').last().css({ top: 290 });
                            $('.bx-prev, .bx-next').addClass('spriteAl');

                            $(document).on('click', '.suggestWrap .friendImg', function () {
                                var id = $(this).attr('src').split('/')[3];

                                var url = 'http://www.facebook.com/dialog/feed?app_id=' + yearlyMe.fbAppId +
                                          '&link=' + yearlyMe.baseURL + "signup.aspx?withFb=true&fromShare=true"; //yearlyMe.baseURL + yearlyMe.user.name;

                                FbClass.getFbUsername(function (name) {
                                   url += '&name=' + encodeURIComponent(name + ' has invited you to join YearlyMe!') +
                                          '&description=' + encodeURIComponent("Join YearlyMe to create a collection of photos of yourself from each year of your life on YearlyMe.com.") +
                                          '&redirect_uri=' + yearlyMe.baseURL + 'PopupClose.aspx' +
                                          '&display=popup' +
                                          '&to=' + id;

                                   socialSharing.openWindow(url);
                                });
                            });
                        }
                    });

                    if (dbList.length == 0)
                        $('.ymHdr').html('You have no facebook friends on YearlyMe');

                    //---- cache facebook friends
                    if (!alreadyCached) {
                        FbClass.storeSuggestFriends(suggestList);
                        alreadyCached = true;
                    }

                }); // end getDbFriends
            }); // end getFriends
        }
    }
}();