$(document).ready(function () {

    /* NAVIGATION VISIBLE ON SCROLL */

    /* $(document).ready(function () {
        mainNav();
    });

    $(window).scroll(function () {
        mainNav();
    });

    if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
        function mainNav() {
            var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (top > 40)
                $('.sticky-navigation').stop().animate({"top": '0'});

            else
                $('.sticky-navigation').stop().animate({"top": '-60'});
        }
    }

    if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
        function mainNav() {
            var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (top > 40)
                $('.sticky-navigation').stop().animate({"top": '0'});

            else
                $('.sticky-navigation').stop().animate({"top": '-120'});
        }
    } */

//smooth scroll

    $(function () {
        $('.scroll-to a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
//Auto Close Responsive Navbar on Click
$(document).ready(function () {

    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

});

    //Flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    //testimonials slider

    $("#owl-testimonials").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        transitionStyle: 'goDown',
        navigationText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]

    });

//screen shot slider
    $("#owl-screenshots").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination:false,
navigation:true,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigationText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
    
    //wow animations
       var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();
});