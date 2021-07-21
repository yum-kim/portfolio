(function($){

    // 배너 이미지 슬라이드 
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });

    // 영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 18, //24
        mousewheel: {
            invert: true,
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: { //breakponint: 반응형으로 슬라이드 변경가능
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    }); 


    // 영화 차트 탭 메뉴
    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show(); //컨텐츠는 모두 숨기고 0번째 컨텐츠만 쇼
    movBtn.click(function (e) { // 버튼 클릭 시 발생할 실행문
        e.preventDefault(); //BTN 클릭해도 아무현상 일어나지 않도록 막음
        var target = $(this);
        var index = target.index();

        movBtn.removeClass("active"); //탭메뉴 활성화 클래스 제거
        target.addClass("active"); //클릭한 탭에 활성화 클래스 부여
        movCont.css("display", "none"); //컨텐츠 숨김
        movCont.eq(index).css("display", "block");

    });

    
    // 공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠 내용을 숨기기
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e){
        e.preventDefault(); //a[#]의 기능 차단
        var target = $(this); //클릭하는 것
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();

        //버튼을 클릭하면 클릭한 a의 형제 ul을 보여주고, 부모인 li에 active 클래스 추가하고,
        //형제의 li에 active 클래스 제거하고, 제거한 li 의 자식 ul을 숨겨줌
    }
    tabMenu.find("ul > li > a").click(tabList).focus(tabList); //클릭 시 함수 실행

})(jQuery);     