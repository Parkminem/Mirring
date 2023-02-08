import instance from './axiosInstance';

/**
 * 문의유형 리스트 받기
 */
function getTypeList() {
  return instance.get('/question/type/list');
}
/**
 * 문의 하기
 * @param object(question_type_pk, name, company, department_position, phone, email, content)
 */
function fetchContact(obj) {
  return instance.post('question/', obj);
}

/**
 * 위치 조회
 */
function getLocation() {
  return instance.get('/location/list');
}
const formApi = { getTypeList, getLocation, fetchContact };

export default formApi;
