import instance from './axiosInstance';

/**
 * 문의유형 리스트 받기
 */
function getTypeList() {
  return instance.get('/question/type/list');
}
/**
 * 위치 조회
 */
function getLocation() {
  return instance.get('/location/list');
}
const formApi = { getTypeList, getLocation };

export default formApi;
