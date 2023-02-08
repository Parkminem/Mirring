import instance from './axiosInstance';

/**
 * 컨텐츠 리스트 조회
 * @param 언어코드,페이지
 */
function getContents(locale, page) {
  return instance.get(`/contents/list/${locale}/${page}`);
}

const contentsApi = { getContents };

export default contentsApi;
