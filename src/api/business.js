import instance from './axiosInstance';

/**
 * 포트폴리오 리스트 조회
 */
function getPortfolio() {
  return instance.get('/portfolio/list');
}

const businessApi = { getPortfolio };

export default businessApi;
