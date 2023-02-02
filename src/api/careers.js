import instance from './axiosInstance';

/**
 * 커리어 조회
 * @param 언어코드,페이지
 */
function getContents(locale) {
  return instance.get(`/careers/list/${locale}`);
}

function getContentsDetail(pk) {
  return instance.get(`/careers/${pk}`);
}
const careersApi = { getContents, getContentsDetail };

export default careersApi;
