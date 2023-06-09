$(document).ready(function () {
    // 풀다운메뉴 이벤트
    $('.outer-menu').hover(function () {
        $(this).find('.inner-menu').css('display', 'block');
    }, function () {
        $(this).find('.inner-menu').css('display', 'none');
    });

    // masonry layout + imageload plugin
    $('#main-section').imagesLoaded(function () {
        $('#main-section').masonry({ // $(this)시 오류 무조건 $('#main-section')
            itemSelector: '.paper',
            columnWidth: 220,
            isAnimated: true
        });
    });

    // 라이트박스 영역
    function showLightBox(obj) {
        // 라이트박스 보이기

        // 선택한 이미지가 보이도록
        var img_src = obj.getElementsByTagName('img')[0].src; // 여기서 인덱스를 1로 하면 프로필 사진(고양이 발바닥)이 나올거임
        $('#random-image').attr('src', img_src);

        $('#darken-background').show();
        $('#darken-background').css('top', $(window).scrollTop());
        $('body').css('overflow', 'hidden');
    };
    function hideLightBox() {
        // 라이트박스 숨기기
        $('#darken-background').hide();
        $('body').css('overflow', '');
    };
    $('.paper').click(function () {
        showLightBox(this);
    });
    $('#darken-background').click(function () {
        hideLightBox();
    });

    $('#lightbox').click(function (e) {
        e.stopPropagation(); // 클릭 이벤트 하위 객체 전달 금지
    });
});