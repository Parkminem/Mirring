<template>
  <div class="content__viewer bg__gray">
    <div class="container">
      <h2 class="content__title">영상최적화기술(콘텐츠 뷰어기술)</h2>
      <p class="content__subtitle">
        모바일 환경에서 스마트폰의 화면을 회전하면<br />
        영상사이즈를 세로 4:4와 가로 16:9비율로 자동으로 변환하는 기술입니다.
      </p>
      <div class="content__notice">
        <a style="color: white; font-family: NotoSans" href="http://222.239.218.187:5009">영상최적화기술 보러가기</a>
      </div>
      <div class="viewer__images">
        <ul class="viewer__process">
          <li class="process process1 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span
                >웹 플랫폼에 업로드된<br />
                웹툰무비 영상을 재생
              </span>
            </div>
            <div class="peocess__number">1</div>
          </li>
          <li class="process process2 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span>전체화면 보기 선택<br />(4:4비율) </span>
            </div>
            <div class="peocess__number">2</div>
          </li>
          <li class="process process3 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span>스마트폰을 가로로 회전</span>
            </div>
            <div class="peocess__number">3</div>
          </li>
          <li class="process process4 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span>가로화면으로 자동 변환<br />(16:9비율) </span>
            </div>
            <div class="peocess__number">4</div>
          </li>
        </ul>
        <div class="viewer__image">
          <div class="horizon"></div>
          <p>스마트폰을 돌리면 영상사이즈 자동 변환</p>
        </div>
      </div>
    </div>
  </div>
</template>
