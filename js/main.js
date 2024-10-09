(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("Bycy85YrtEZDdhoZb"); // Ganti dengan User ID Anda

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_l7qyhxp', 'template_i71zp9v', this)
            .then(function() {
                alert('Pesan berhasil dikirim!');
            }, function(error) {
                alert('Pesan gagal dikirim. Error: ' + JSON.stringify(error));
            });
    });
});

    // Event listener untuk tombol "Subscribe"
    document.addEventListener('DOMContentLoaded', function() {
        emailjs.init("Bycy85YrtEZDdhoZb"); // Ganti dengan User ID Anda
    
        // Event listener untuk form "subscribe-form"
        document.getElementById('subscribe-form').addEventListener('submit', function(event) {
            event.preventDefault();
    
            emailjs.sendForm('service_c54iahs', 'template_ccdj337', this)
                .then(function() {
                    alert('Email berhasil dikirim!');
                }, function(error) {
                    alert('Email gagal dikirim. Error: ' + JSON.stringify(error));
                });
        });
    });

    // Event listener untuk tombol "Subscribe" di about.html
    document.getElementById('about-subscribe-button').addEventListener('click', function() {
        var email = document.getElementById('about-email-input').value;

        var templateParams = {
            email: email
        };

        emailjs.send('service_c54iahs', 'template_ccdj337', templateParams)
            .then(function() {
                alert('Email berhasil dikirim!');
            }, function(error) {
                alert('Email gagal dikirim. Error: ' + JSON.stringify(error));
            });
    });