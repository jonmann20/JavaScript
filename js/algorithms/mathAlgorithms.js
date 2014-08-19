mathAlgorithms = function () {
    return {
        init: function () {

        },

        fib: function (n) {
            var arr = [0, 1]

            for (var i = 0, j = 1; j < n; ++i, ++j)
                arr.push(arr[i] + arr[j])

            return arr[n]
        },

        isPowerOf2: function (n) {
            return (n % 2 == 0) ? true : false
        }

    }
}()

$(function () {
    var m = mathAlgorithms

    console.log(m.isPowerOf2(13))

})