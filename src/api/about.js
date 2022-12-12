import instance from './axiosInstance';

/**
 * 파트너사 리스트 받기
 */
function getPartners() {
  return instance.get('/partner/list');
}

const aboutApi = { getPartners };

export default aboutApi;
