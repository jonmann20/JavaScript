var GlobalNav = function () {
    var mainNav = null,
        subNav = null,
        that = null;

    return {
        init: function () {
            that = this;

            mainNav = $('header .hdrNav3 .mainNav > li');
            subNav = $('header .hdrNav3 .subNav');

            if (SvhUtils.isTouchDevice())
                this.touchDevice();
            else
                this.mouseDevice();
        },

        /*

        'active' class used for styling and delayed link redirection
        'touched' class used for help closing the subnav 

        */
        touchDevice: function(){
            //console.log('is touch device');

            mainNav.on('click', function (e) {
                if (!$(this).hasClass('active')) {
                    e.preventDefault();
                    //console.log('click -- prevent redirect');

                    $(this).siblings('.active, .touched').removeClass('active touched');
                    $(this).addClass('touched');

                    var nextSubNav = $('header .hdrNav3 .page').find('ul:eq(' + ($(this).index() + 1) + ')');

                    if (nextSubNav.html().length > 0) {

                    //    //if(subNav[0] == nextSubNav[0])      // already active
                    //    //    subNav.fadeOut(300);

                        //subNav.fadeOut(300);
                        //nextSubNav.fadeIn(300);

                        subNav.hide();
                        nextSubNav.show();

                        $(this).addClass('active');
                    }
                }
                else {
                    //console.log('already clicked -- redirect to href');
                }
            });

            // reset nav if touch outside of mainNav li, subNav, or subNav's elts
            $('body :not(header .hdrNav3 .mainNav > li, header .hdrNav3 .subNav, header .hdrNav3 .subNav *)').on('touchstart', function (e) {
                e.stopPropagation();

                if (subNav.is(':visible') || mainNav.hasClass('active') || mainNav.hasClass('touched')) {
                    //subNav.fadeOut(300);
                    subNav.hide();
                    mainNav.removeClass('active touched');

                    //console.log('reset');
                }
            });
        },

        mouseDevice: function () {
            //console.log('is mouse device');

            // hovering on mainNav li
            mainNav.hover(function (e) {
                e.stopPropagation();
                subNav.removeClass('isHover');

                var nextSubNav = $('header .hdrNav3 .page').find('ul:eq(' + ($(this).index() + 1) + ')');

                if (nextSubNav.html().length > 0) {
                    nextSubNav.show();
                    $(this).addClass('active');
                }
            });

            // reset nav if not hovering on mainNav li, subNav, or subNav's elts
            $('body :not(header .hdrNav3 .mainNav > li, header .hdrNav3 .subNav, header .hdrNav3 .subNav *)').hover(function () {

                if (subNav.is(':visible') || mainNav.hasClass('active')) {
                    subNav.hide();
                    mainNav.removeClass('active');
                }
            });

        }
    };
}();
