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
        }

    }
}()

$(function () {
    var s = stringAlgorithms

    console.log(s.removeChar('typxo', 'x'))

})