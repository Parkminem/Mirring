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

//

const scrollEvent = {
  boxAnimationByscroll,
  sectionAnimationByscroll,
  settingBoxAnimation
};
export default scrollEvent;
