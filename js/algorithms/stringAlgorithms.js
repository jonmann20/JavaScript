stringAlgorithms = function () {
    return {
        init: function () {

        },

        // Write a method which will remove any given character from a String
        removeChar: function (s, c) {
            var result = ''

            for (var i = 0; i < s.length; ++i) {
                if (s[i] != c)
                    result += s[i]
            }

            return result
        },

        reverse: function (s) {
            var result = ''

            for (var i=s.length-1; i >= 0; --i) {
                result += s[i]
            }

            return result
        },

        isPalindrome: function (s) {
            return this.reverse(s) == s
        },

        // iteratively
        rotate: function(s, n, goLeft){
            var result = ''

            if (n > s.length)
                n = n % s.length

            if (goLeft) {
                for (var i = n; i < s.length; ++i)
                    result += s[i]

                for (var i = 0; i < n; ++i)
                    result += s[i]
            }
            else {
                var j=s.length-n

                for (var i = 0; i < n; ++i)
                    result += s[j++]

                for (var i = 0; i < s.length - n; ++i)
                    result += s[i]
            }

            return result
        },

        printPerm: function (s) {

        }

    }
}()