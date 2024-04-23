(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    document.getElementById('learn-more-btn').addEventListener('click', function() {
        document.querySelector('.additional-skills').innerHTML = `
        <div class="skill-name">
        <p>Unity</p><p>80%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="skill-name">
            <p>Point Cloud Manipulation</p><p>90%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="skill-name">
            <p>Photogrammetry</p><p>70%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="skill-name">
            <p>Firebase</p><p>70%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="skill-name">
            <p>Python</p><p>90%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="skill-name">
            <p>Objective-C</p><p>80%</p>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" style="width: 80%;" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        `;
        document.querySelector('.additional-skills').style.display = 'block';
        document.getElementById('learn-more-btn').style.display = 'none';
        document.getElementById('learn-less-btn').style.display = 'inline-block';
    });
    
    document.getElementById('learn-less-btn').addEventListener('click', function() {
        document.querySelector('.additional-skills').style.display = 'none';
        document.getElementById('learn-more-btn').style.display = 'inline-block';
        document.getElementById('learn-less-btn').style.display = 'none';
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    // Competitions carousel
    var currentIndex = 0;
    var items = $('.carousel-item');
    
    function showItem(index) {
        items.removeClass('active');
        $(items[index]).addClass('active');
    }
    
    $('.carousel-control-prev').click(function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });
    
    $('.carousel-control-next').click(function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });
    
    function autoSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }
    
    var interval = setInterval(autoSlide, 2000);
    
    $('.carousel-control-prev, .carousel-control-next').hover(function () {
        clearInterval(interval);
    }, function () {
        interval = setInterval(autoSlide, 2000);
    });
     
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
