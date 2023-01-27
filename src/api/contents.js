import instance from './axiosInstance';

/**
 * 컨텐츠 리스트 조회
 * @param 언어코드
 */
function getContents(locale) {
  return instance.get(`/contents/list/${locale}`);
}

const contentsApi = { getContents };

export default contentsApi;
