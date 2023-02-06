import instance from './axiosInstance';

/**
 * 커리어 조회
 * @param 언어코드,페이지
 */
function getCareers() {
  return instance.get(`/careers/list`);
}

function getCareersDetail(pk) {
  return instance.get(`/careers/${pk}`);
}
const careersApi = { getCareers, getCareersDetail };

export default careersApi;
