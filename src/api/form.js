import instance from './axiosInstance';

/**
 * 문의유형 리스트 받기
 */
function getTypeList() {
  return instance.get('/question/type/list');
}

const formApi = { getTypeList };

export default formApi;
