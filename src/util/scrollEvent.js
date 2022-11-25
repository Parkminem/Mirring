import $ from 'jquery';
import { useRoute } from 'vue-router';

/**
섹션이 밑에서 위로 올라오는 애니메이션
 */
function sectionAnimationByscroll() {
  const controller = new ScrollMagic.Controller();
  $('.section_animation').each(function () {
    const before_margin_top = parseInt($(this).css('margin-top')); // before
    const after_margin_top = before_margin_top + 100; // after
    const tween = new TimelineMax().fromTo(
      this,
      0.8,
      { opacity: 0, marginTop: after_margin_top + 'px' }, // after
      { opacity: 1, marginTop: before_margin_top + 'px' } // before
    );
    const scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  });
}

function boxAnimationByscroll() {
  const element = $('.box_animation');
  element.each(function () {
    settingBoxAnimation(this);
  });
}

/** 
가로로 나열된 박스의 opacity 가 순서대로 1로 바뀌는 함수
인수로는 박스들의 부모요소가 들어감(ref로 지정 후 onMounted에서 호출하여 사용)
*/
function settingBoxAnimation(element) {
  const controller = new ScrollMagic.Controller();
  const item = $(element).children();
  item.each(function (i) {
    const tween = new TimelineMax({
      delay: '0.' + i
    }).fromTo(
      this,
      0.5,
      { opacity: 0 }, // after
      { opacity: 1 } // before
    );
    const scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  });
}

/**
스와이퍼 네비게이션 버튼 없애는 함수(메인 뉴스 4개 이하일 때)
 */
function settingNewsSlider() {
  const element = $(".section[data-name='main_about'] .swiper-slide");
  const element_length = element.length;
  if (element_length <= 4) {
    $('.swiper_navigation').hide();
    element.addClass('css');
  }
  // swiperSlide() 에러떠서 주석처리
  // else {
  //   swiperSlide();
  //   $(window).on('resize', () => {
  //     swiperSlide();
  //   });
  // }
}

/**
 * 메인 네비게이션 클릭이벤트
 */
function settingNavigationByClick() {
  $('.dot').on('click', function () {
    const target = $(this).attr('data-target');
    const element = $('.' + target);
    const element_offset_top = element.offset().top;
    if (target == 'dot2' || target == 'dot4' || target == 'dot5') {
      if (element.css('opacity') == '0') {
        $('body, html').animate({ scrollTop: element_offset_top - 100 - 100 }, 400);
      } else {
        $('body, html').animate({ scrollTop: element_offset_top - 100 }, 400);
      }
    } else if (target == 'dot3') {
      if (element.css('opacity') == '0') {
        $('body, html').animate({ scrollTop: element_offset_top - 350 - 100 }, 400);
      } else {
        $('body, html').animate({ scrollTop: element_offset_top - 142.5 - 100 }, 400);
      }
    } else if (target == 'dot1') {
      $('body, html').animate({ scrollTop: element_offset_top - 100 }, 400);
    }
  });
}
/**
 * 메인 네비게이션 스크롤 이벤트
 */
function settingNavigationByScroll() {
  const route = useRoute();
  if (route.path == '/') {
    $(window).on('scroll', function () {
      console.log('scroll');
      let scroll_top = $(this).scrollTop();
      let i = '';
      if (scroll_top >= $('.dot1').offset().top - $('.dot1').innerHeight() / 2) i = 0;
      if (scroll_top >= $('.dot2').offset().top - $('.dot2').innerHeight() / 2) i = 1;
      if (scroll_top >= $('.dot3').offset().top - $('.dot3').innerHeight() * 1.5) i = 2;
      if (scroll_top >= $('.dot4').offset().top - $('.dot4').innerHeight()) i = 3;
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) i = 4;
      $('.dot').stop().eq(i).addClass('active').siblings().removeClass('active');
    });
  } else {
    return false;
  }
}

const scrollEvent = {
  boxAnimationByscroll,
  settingNewsSlider,
  sectionAnimationByscroll,
  settingNavigationByClick,
  settingBoxAnimation,
  settingNavigationByScroll
};
export default scrollEvent;
