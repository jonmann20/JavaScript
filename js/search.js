search = function () {
    return {
        init: function () {

        },

        linear: function(a, val){
            var n = a.length

            for(var i=0; i < n; ++i)
                if(a[i] == val) 
                    return i
        },

        binary: function(a, val){
            var i=0,
                j=a.length

            while (j >= i) {
                var mid = Math.floor((j + i) / 2)

                if (a[mid] < val)
                    i = mid + 1
                else if (a[mid] > val)
                    j = mid - 1
                else
                    return mid
            }

            return -1
        }
    }
}()

$(function(){
    var arr = [2,4,5,6,7,8,9,10,12,15,17,19]

    var key = search.linear(arr, 9)
    console.log(arr[key])

    key = search.binary(arr, 9)
    console.log(arr[key])

})