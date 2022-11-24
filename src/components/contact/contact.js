$(document).ready(function () {
  settingKakaoMap();
  settingQuestionSelect();
  settingQuestionSelectByClick();
});
function settingKakaoMap() {
  var map_container = $('.kakao_map');

  map_container.each(function () {
    mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    // 지도를 생성합니다
    var map = new kakao.maps.Map(this, mapOption);
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 주소
    var address = $(this).attr('data-address');

    //주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  });
}
function insertQuestion() {
  var elementArray = [];
  elementArray.push($('#select_question_type'));
  elementArray.push($('#name'));
  elementArray.push($('#phone'));
  elementArray.push($('#email'));
  elementArray.push($('#content'));
  elementArray.push($('#phone'));
  if (checkElementArray(elementArray) && checkPrivacyAgree()) {
    if (confirm(getRegisConfirmMsg())) {
      ajaxSubmit('questionFormId', '/insertQuestion', 'insertQuestion');
    }
  }
}
function checkPrivacyAgree() {
  var flag = true;
  if (!$("input:checkbox[id='privacy_agree']").is(':checked')) {
    alert(getPrivacyAgreeAlertMsg());
    flag = false;
  }
  return flag;
}
function getPrivacyAgreeAlertMsg() {
  var language = $('input[name=language]').val();
  var message = '';
  switch (language) {
    case 'kr':
      message = '개인정보처리방침에 동의해주세요.';
      break;
    case 'id':
      message = 'Mohon menyetujui kebijakan privasi.';
      break;
    case 'pt':
      message = 'Por favor, concorde com a política de privacidade.';
      break;
    case 'us':
      message = 'Please agree to the privacy policy.';
      break;
    default:
      message = 'Please agree to the privacy policy.';
      break;
  }
  return message;
}
function settingQuestionSelect() {
  var option = $('#select_question_type option');

  option.each(function (index, item) {
    var name = $(this).text();
    var value = $(this).attr('value');
    var element = '<li value=' + value + '>' + name + '</li>';
    if (index == '0') {
      element = $(element).addClass('placeholder active');
    }
    $('.animation_question_select').append(element);
  });
}
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
