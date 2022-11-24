$(document).ready(function () {
  settingHistoryLayout();
  boxAnimationByscroll();
});
function mvNewsPage(curPage) {
  $('#curPage').val(curPage);
  ajaxSubmit('aboutFormId', '/selectNewsListByPaging', 'selectNewsListByPaging');
}
function settingNewsListByPaging(data) {
  var jsonOb = JSON.parse(data);
  var pagination = JSON.parse(jsonOb.pagination);
  var newsMapList = JSON.parse(jsonOb.newsMapList);

  $('.news_content').children().remove();

  $.each(newsMapList, function (index, value) {
    var news_pk = value.news_pk;
    var title = value.print_title;
    var thumbnail = value.print_thumbnail_file_url;
    var regdate = value.print_regdate;
    var html =
      "<div class='box'>" +
      "<div class='effect_area' onclick='mvNewsDetail(" +
      news_pk +
      ")'>" +
      "<div class='image_box' style='background-image:url(" +
      thumbnail +
      ")'></div>" +
      '</div>' +
      "<div class='info'>" +
      "<p class='date'>" +
      regdate +
      '</p>' +
      "<p class='title ellipsis_line_2' onclick='mvNewsDetail(" +
      news_pk +
      ")'>" +
      title +
      '</p>' +
      "<div class='news_page_move'>" +
      "<span onclick='mvNewsDetail(" +
      news_pk +
      ")'>" +
      printMsg('+ 더 보기', '+ Lanjut', '+ Mais', '+ More') +
      '</span>' +
      '</div>' +
      '</div>' +
      '</div>';
    $('.news_content').append(html);
  });

  settingNewsPagination(pagination);
}
function settingNewsPagination(pagination) {
  var curBlock = pagination.curBlock;
  var prevPage = pagination.prevPage;
  var blockBegin = pagination.blockBegin;
  var blockEnd = pagination.blockEnd;
  var curPage = pagination.curPage;
  var totalBlock = pagination.totalBlock;
  var prevPage = pagination.prevPage;
  var nextPage = pagination.nextPage;
  var html = '';

  $('.news_pagination').children().remove();

  if (curBlock > 1) {
    html +=
      "<li class='arrow prev' onclick='mvNewsPage(" +
      prevPage +
      ")'><img src='/resources/common/images/about/about/pagination_prev.png' alt='arrow_prev' alt='arrow_prev'/></li>";
  }
  for (var i = blockBegin; i <= blockEnd; i++) {
    if (i == curPage) {
      html += "<li class='number active'>" + i + '</li>';
    } else {
      html += "<li class='number' onclick='mvNewsPage(" + i + ")'>" + i + '</li>';
    }
  }
  if (curBlock < totalBlock) {
    html +=
      "<li class='arrow next' onclick='mvNewsPage(" +
      nextPage +
      ")'><img src='/resources/common/images/about/about/pagination_next.png' alt='arrow_next' alt='arrow_next'/></li>";
  }

  $('.news_pagination').append(html);
}
function mvNewsDetail(news_pk) {
  $('#news_pk').val(news_pk);
  formSubmit($('#aboutFormId'), '/about/detail', 'get');
}
function settingHistoryLayout() {
  var box = $('.history_box');

  for (var i = 0; i < box.length; i += 2) {
    box.slice(i, i + 2).wrapAll("<div class='content box_animation'></div>"); // 1. 한세트(2개) 나누기
  }
  appendHistoryEmptyBox(); // 2. 한세트(2개) 가 안채워질 경우 회색박스 추가
}
function appendHistoryEmptyBox() {
  var box = $('.history_area .content');
  var element = "<div class='history_box active'></div>";

  box.each(function (i) {
    var children_length = $(this).children().length;

    if (children_length < 2) {
      for (i = children_length; i < 2; i++) {
        $(this).append(element);
      }
    }
  });
}
