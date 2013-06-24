sort = function () {
    return {
        init: function () {

        },

        bubble: function (a) {
            var swapped = true,
                n = a.length,
                tmp

            while(swapped){
                swapped = false

                for (var i = 1; i < n; ++i) {
                    if (a[i-1] > a[i]) {
                        tmp = a[i-1]
                        a[i-1] = a[i]
                        a[i] = tmp

                        swapped = true
                    }
                }
            }
        }
    }
}()

$(function(){
    //sort.init()

    var arr = [10, 15, 19, 2, 5, 6, 14]

    //sort.bubble(arr)
    //console.log(arr)

    

})