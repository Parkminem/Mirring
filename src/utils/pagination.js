/**
 * 페이지네이션 함수
 * page : 현재페이지
 * totalPage : 총 페이지 수
 * pageSize : 한 컴포넌트 당 페이지 갯수
 */
export function pagination(page, totalPage, pageSize) {
  const startPage = page - ((page - 1) % pageSize); // 한 컴포넌트의 시작페이지
  const endPage = startPage + (pageSize - 1); //한 컴포넌트 안의 끝나는 페이지
  const preBtn = startPage > pageSize ? true : false; //이전 버튼 생성
  const nextBtn = totalPage > pageSize && totalPage !== endPage ? true : false; //다음 버튼 생성

  let pageArr = [];
  for (let i = start; i <= endPage; i++) pageArr.push(i);

  return {
    startPage,
    endPage,
    preBtn,
    nextBtn,
    pageArr
  };
}
