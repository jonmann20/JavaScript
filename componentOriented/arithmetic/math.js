/*
    The math component of Arithmetic.
*/
var MathComponent = function () {
    $.extend(this, Arithmetic.protectedInfo);

    return {
        add: function (a, b) {
            var result = a + b;
            total += result;

            return result;
        }
    };
};
