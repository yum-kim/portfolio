$(document).ready(function () {

    //스킬영역 프로그레스바
    //화면에 요소가 나올 때 애니매이션 실행
    var isVisible = false;

    $(window).on('scroll', function () {
        if (checkVisible($('#skills')) && !isVisible) {
            moveProgressBar1();
            moveProgressBar2();
            moveProgressBar3();
            moveProgressBar4();
            moveProgressBar5();
            // counter_js1();
            // counter_js2();
            // counter_js3();
            // counter_js4();
            // counter_js5();
            isVisible = true;
        }
    });

    
    // 스킬영역 퍼센트 숫자 카운트
    (function () {

        var show = document.querySelector('.js-count1'),
            number = Number(show.innerHTML) + 1;

        var counter = 0,
            delay = 1,
            x = number / 2,
            y = 0;

        counter_js1();

        function counter_js1() {
            y++;
            delay = (x - y);
            show.innerHTML = counter.toString();
            counter++;
            if (counter < number) {
                setTimeout(function () {
                    counter_js1();
                }, delay)
            }
        }
    })();

    

    (function () {
        var show = document.querySelector('.js-count2'),
            number = Number(show.innerHTML) + 1;

        var counter = 0,
            delay = 1,
            x = number / 2,
            y = 0;

        counter_js2();

        function counter_js2() {
            y++;
            delay = (x - y);
            show.innerHTML = counter.toString();
            counter++;
            if (counter < number) {
                setTimeout(function () {
                    counter_js2();
                }, delay)
            }
        }
    })();

    (function () {
        var show = document.querySelector('.js-count3'),
            number = Number(show.innerHTML) + 1;

        var counter = 0,
            delay = 1,
            x = number / 2,
            y = 0;

        counter_js3();

        function counter_js3() {
            y++;
            delay = (x - y);
            show.innerHTML = counter.toString();
            counter++;
            if (counter < number) {
                setTimeout(function () {
                    counter_js3();
                }, delay)
            }
        }
    })();

    (function () {
        var show = document.querySelector('.js-count4'),
            number = Number(show.innerHTML) + 1;

        var counter = 0,
            delay = 1,
            x = number / 2,
            y = 0;

        counter_js4();

        function counter_js4() {
            y++;
            delay = (x - y);
            show.innerHTML = counter.toString();
            counter++;
            if (counter < number) {
                setTimeout(function () {
                    counter_js4();
                }, delay)
            }
        }
    })();

    (function () {
        var show = document.querySelector('.js-count5'),
            number = Number(show.innerHTML) + 1;

        var counter = 0,
            delay = 1,
            x = number / 2,
            y = 0;


        counter_js5();

        function counter_js5() {
            y++;
            delay = (x - y);
            show.innerHTML = counter.toString();
            counter++;
            if (counter < number) {
                setTimeout(function () {
                    counter_js5();
                }, delay)
            }
        }
    })();




    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

    // on browser resize...
    // $(window).resize(function () {
    //     moveProgressBar();
    // });

    //SIGNATURE PROGRESS
    function moveProgressBar1() {
        console.log("moveProgressBar");
        var getPercent = ($('.html').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.html').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.html-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function moveProgressBar2() {

        var getPercent = ($('.css').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.css').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.css-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function moveProgressBar3() {

        var getPercent = ($('.js').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.js').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.js-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function moveProgressBar4() {

        var getPercent = ($('.ps').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.ps').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.ps-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    function moveProgressBar5() {

        var getPercent = ($('.ai').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.ai').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.ai-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }


});