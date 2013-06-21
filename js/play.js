function log(msg, num) {
    $('h' + num).html(msg);
}

MyClass = function () {
    var that = null

	return {
		init: function(){
			that = this
		},

		fib: function(n) {
	        var arr = [0,1]

	        for (var i = 0, j = 1; j < n; ++i, ++j)
                arr.push(arr[i] + arr[j])

            return arr[n]
		},

		sort: function (a) { // bubble
		    var tmp,
                n = a.length,
                swapped = true

		    while (swapped) {
                swapped = false
		        for (var i = 1; i < n; ++i) {
		            if (a[i - 1] > a[i]) {
                        tmp = a[i-1]
                        a[i-1] = a[i]
                        a[i] = tmp
		                swapped = true
		            }
		        }
		    }

            return a
		},

		search: function (a, num) {
		    //-----linear
		    //for(var i=0; i < a.length; ++i)
		    //    if(a[i] == num) return i

            //-----binary
		    var i=0,
                j=a.length

		    while (j >= i) {
		        var mid = Math.floor((j + i) / 2)
                console.log(mid)

		        if(a[mid] < num)
		            i = mid + 1
		        else if(a[mid] > num)
		            j = mid - 1
		        else
                    return mid
		    }

            return -1
		},

	    // Write a method which will remove any given character from a String?
		removeChar: function (s, c) {
		    var result = ''

		    for (var i = 0; i < s.length; ++i) {
		        if(s[i] != c)
                    result += s[i]
		    }

		    return result
		},

		findThirdFromLast: function (a) {
		    var i=0,
                j = 0

		    while(i != a.length){
		        if(i++ >= 3)
		            ++j
		    }

            return j
		}
	}
}()

$(function () {
    MyClass.init()

    var num = MyClass.fib(11),
        arr = MyClass.sort([89,1,4,5,2,6,9,22,1,34,1234,1,10, 55, 9, 4, 18]),
        idx = MyClass.search(arr, num)

    console.log('arr[' + idx + ']: ' + arr[idx] + ' ?= ' + num)

    console.log(MyClass.removeChar('John', 'h'))

    console.log(arr.length-3 + ' ?= ' + MyClass.findThirdFromLast(arr))
})