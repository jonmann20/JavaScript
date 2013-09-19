/*
    The Arithmetic singleton.
*/
var Arithmetic = (function () {
    // private:
    var self = this,
        math = null,
        viewModel = null
    ;


    // public:
    return {
        protectedInfo: {    // converted to private on init()
            total: 0
        },

        init: function () {
            // components needing protectedInfo here:
            math = MathComponent();
            viewModel = ViewModelComponent();

            $.extend(self, Arithmetic.protectedInfo);
            delete Arithmetic.protectedInfo;

            // main:
            $("input").on("change", function () {
                viewModel.setTotalInit($(this).val());

                math.add(1, 2);
                math.add(2, 4);
            });
        },

        getTotal: function () {
            console.log(total);
        }
    };
})();
