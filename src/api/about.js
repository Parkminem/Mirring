import instance from './axiosInstance';

/**
 * 파트너사 리스트 받기
 */
function getPartners() {
  return instance.get('/partner/list');
}
/**
 * 연혁 리스트 받기(언어코드)
 */
function getHistory(lang) {
  return instance.get(`/history/list/${lang}`);
}
/**
 * 뉴스 리스트 받기(언어코드, 페이지번호)
 */
function getNews(lang, page) {
  return instance.get(`/news/list/${lang}/${page}`);
}
/**
 * 뉴스 상세 내용 조회(언어코드, 뉴스고유번호)
 */
function getDetailNews(lang, num) {
  return instance.get(`/news/${lang}/${num}`);
}
const aboutApi = { getPartners, getHistory, getNews, getDetailNews };

export default aboutApi;
