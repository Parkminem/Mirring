/**
 * 받아온 날짜 형태 바꾸는 함수
 * 년,월,일만 자르고 -를 .로 변경
 */
export const changeDate = (date) => {
  return date.substr(0, 10).replace(/-/g, '.');
};
