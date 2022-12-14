import instance from './axiosInstance';

/**
 * 파트너사 리스트 받기
 */
function getPartners() {
  return instance.get('/partner/list');
}
/**
 * 연혁 리스트 받기
 */
function getHistory(lang) {
  return instance.get(`/history/list?lang=${lang}`);
}
/**
 * 뉴스 리스트 받기
 */
function getNews(lang) {
  return instance.get(`/news/list?lang=${lang}`);
}
const aboutApi = { getPartners, getHistory, getNews };

export default aboutApi;
