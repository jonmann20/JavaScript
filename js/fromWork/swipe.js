var Theater = (function () {
    var toRemove = 'num',
        maxRange = 1,
        transitionTimer = null;

    function crossfade(next) {
        $('.theater .btnBubble.active').removeClass('active');
        next.addClass('active');

        var num = getNum(next);

        if ($('.theater .thContent.active')[0] !== $('.content' + num)[0]) {

            $('.theater .thContent.active').fadeOut(740);
            $('.theater .thContent.active').removeClass('active');

            $('.theater .content' + num).addClass('active');
            $('.theater .content' + num).fadeIn(740);
        }
    }

    /* Utils */
    function getNum(elt) {
        return parseInt(elt.attr('class').split(' ')[0].replace(toRemove, ''));
    }

    function swipeEvents() {
        //wrap.on('touchstart', function () { // not firing on iPad3
        //    console.log('touch start');
        //});

        var initX = -1;
        $('.theater').on('touchmove', function (e) {
            e.preventDefault();
            //console.log('touch move');

            if (initX == -1) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                //console.log(touch.pageX);

                initX = touch.pageX;
            }
        });

        $('.theater').on('touchend', function (e) {
            //e.preventDefault();
            //console.log('touch end');

            if (initX != -1) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                //console.log(touch.pageX);

                //console.log(initX + ' < ' + touch.pageX);

                if (initX < touch.pageX) {
                    //console.log('go left');
                    var num = getNum($('.theater .btnBubble.active'));

                    if (--num < 1)
                        num = maxRange;

                    window.clearTimeout(transitionTimer);
                    crossfade($('.theater .btnBubble.num' + num));
                }
                else if (initX > touch.pageX) {
                    //console.log('go right');
                    var num = getNum($('.theater .btnBubble.active'));

                    if (++num > maxRange)
                        num = 1;

                    window.clearTimeout(transitionTimer);
                    crossfade($('.theater .btnBubble.num' + num));
                }

                initX = -1;
            }
        });
    }


    return {
        init: function () {
            //maxRange = getNum($('.theater li').last().children('i'));

            //transitionTimer = window.setInterval(function () {
            //    var num = getNum($('.theater .btnBubble.active'));    

            //    if (++num > maxRange)
            //        num = 1;

            //    crossfade($('.theater .btnBubble.num' + num));
            //}, 7000);


            //$('.theater .thContent:not(.active)').hide();    // setting in CSS caused no crossfade on first run through

            //$('.theater .btnBubble').on('click', function (e) {
            //    e.preventDefault();
            //    window.clearTimeout(transitionTimer);

            //    crossfade($(this));
            //});


            //if (SvhUtils.isTouchDevice())
            //    swipeEvents();
        }
    };
})();
