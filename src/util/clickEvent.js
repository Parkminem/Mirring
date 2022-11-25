import $ from 'jquery';

/**
 * 셀렉트 박스 리스트 클릭 이벤트
 */
function settingQuestionSelectByClick() {
  $('.animation_question_select li')
    .off()
    .on('click', function () {
      var value = $(this).attr('value');
      if ($(this).hasClass('active')) {
        if ($(this).parent().hasClass('active')) {
          // #1 펼쳐져 있고 active 되어 있는 애를 클릭 했을때
          $(this).parent().removeClass('active');
        } else {
          // #2 펼쳐야할때
          $(this).parent().addClass('active');
        }
      } else {
        // #3 active 안된 li 클릭했을때
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().removeClass('active');
        $('#select_question_type').val(value);
      }
    });
  $('.animation_question_select_box').on('mouseleave', function () {
    $(this).children().removeClass('active');
  });
}

const clickEvent = {
  settingQuestionSelectByClick
};
export default clickEvent;
