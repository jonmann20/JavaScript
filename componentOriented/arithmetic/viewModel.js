/*
    The view model component of Arithmetic.
*/
var ViewModelComponent = function () {
    $.extend(this, Arithmetic.protectedInfo);

    return {
        setTotalInit: function (val) {
            total = parseInt(val);
        }
    };
};
