import $ from 'jquery';

function sectionAnimationByscroll() {
  var controller = new ScrollMagic.Controller();
  $('.section_animation').each(function () {
    var before_margin_top = parseInt($(this).css('margin-top')); // before
    var after_margin_top = before_margin_top + 100; // after
    var tween = new TimelineMax().fromTo(
      this,
      0.8,
      { opacity: 0, marginTop: after_margin_top + 'px' }, // after
      { opacity: 1, marginTop: before_margin_top + 'px' } // before
    );
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  });
}

function boxAnimationByscroll() {
  var element = $('.box_animation');
  element.each(function () {
    settingBoxAnimation(this);
  });
}

/** 
가로로 나열된 박스의 opacity 가 순서대로 1로 바뀌는 함수
인수로는 박스들의 부모요소가 들어감(ref로 지정 후 onMounted에서 호출하여 사용)
*/
function settingBoxAnimation(element) {
  var controller = new ScrollMagic.Controller();
  var item = $(element).children();
  item.each(function (i) {
    var tween = new TimelineMax({
      delay: '0.' + i
    }).fromTo(
      this,
      0.5,
      { opacity: 0 }, // after
      { opacity: 1 } // before
    );
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  });
  console.log(item);
}

function settingNewsSlider() {
  var element = $(".section[data-name='main_about'] .swiper-slide");
  var element_length = element.length;
  if (element_length <= 4) {
    $('.swiper_navigation').hide();
    element.addClass('css');
  } else {
    swiperSlide();
    $(window).on('resize', () => {
      console.log(swiper);
      swiperSlide();
    });
  }
}

function settingNavigationByClick() {
  $('.dot').on('click', function () {
    var target = $(this).attr('data-target');
    var element = $('.' + target);
    var element_offset_top = element.offset().top;

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
const scrollEvent = {
  boxAnimationByscroll,
  settingNewsSlider,
  sectionAnimationByscroll,
  settingNavigationByClick,
  settingBoxAnimation
};
export default scrollEvent;
