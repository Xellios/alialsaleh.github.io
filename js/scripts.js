/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

var resumeSections = $('.resume-section');

    (function ($) {
        "use strict"; // Start of use strict

        $(window).scroll(function () {
            // Get most visible.
            var currentMostVisibleElement = $('.most-visible').first();
            var mostVisibleElement = $('.resume-section').mostVisible();

            if (mostVisibleElement.attr('id') != 'clients') {
                $('.goto-next').removeClass('turn-upside-down');
            }

            if (currentMostVisibleElement.attr('id') != 'undefined' &&
                currentMostVisibleElement.attr('id') != mostVisibleElement.attr('id')) {
                // Remove the previous most-visible.
                currentMostVisibleElement.removeClass('most-visible');

                var indexOfNextSection = resumeSections.index(mostVisibleElement) + 1;

                if (indexOfNextSection != resumeSections.length) {
                    var nextSection = resumeSections.get(indexOfNextSection);

                    // Set arrow link to next section.
                    $('.goto-next').attr('href', `#` + nextSection.id);
                }
                else {
                    var nextSection = resumeSections.get(0);

                    if (nextSection.id == 'about') {
                        $('.goto-next').addClass('turn-upside-down');
                    }

                    $('.goto-next').attr('href', `#` + nextSection.id);
                }
            }


            // Set most visible.
            mostVisibleElement.addClass('most-visible');
        });

        // Scrolly links.
        $('.scrolly').scrolly({
            speed: 2000
        });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
