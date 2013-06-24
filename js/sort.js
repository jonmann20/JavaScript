sort = function () {
    return {
        init: function () {

        },

        bubble: function (a, cmp) {

            cmp = (typeof (cmp) !== 'undefined') ? cmp : compare;

            var swapped = true,
                n = a.length,
                tmp

            while(swapped){
                swapped = false

                for (var i = 1; i < n; ++i) {
                    if (cmp(a[i-1], a[i])) {
                        tmp = a[i-1]
                        a[i-1] = a[i]
                        a[i] = tmp

                        swapped = true
                    }
                }
            }
        }
    }

    function compare(a, b) {
        return a > b
    }
}()

$(function(){
    //sort.init()

    var arr = [10, 15, 19, 2, 5, 6, 14]

    //sort.bubble(arr)
    //console.log(arr)

    

})