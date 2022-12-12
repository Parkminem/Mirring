<template>
  <div class="content_wrap">
    <div class="list_box_wrap">
      <ul>
<<<<<<< HEAD
        <li class="listbox">
=======
        <li class="listbox" v-for="(item, idx) in items" :key="item.title">
>>>>>>> dev
          <div class="img_wrap">
            <img src="/assets/images/contents/img01.jpg" />
          </div>
          <dl>
<<<<<<< HEAD
            <dt>나의 로맨틱 홀리데이</dt>
            <dd>
              할리우드 여행을 꿈꾸는 대한민국 흔녀 강재인. 부푼 설레임을 안고 떠난 LA 패키지 투어에서 만난 것은 다름
              아닌 첩보, 액션, 스릴러?
=======
            <dt>{{ item.title }}</dt>
            <dd>
              {{ item.desc }}
>>>>>>> dev
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li>
<<<<<<< HEAD
              <a target="blank" href="/assets/data/contents/01_나의_로맨틱_홀리데이_ko.pdf">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="/assets/data/contents/01_나의_로맨틱_홀리데이_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img02.jpg" />
          </div>
          <dl>
            <dt>기적의 물리치료사</dt>
            <dd>파리만 날리는 센터에 한탄하고 있던 기적은, 여자친구 차지은 마저 고교동창 명석한에게 빼앗기고 만다.</dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <a target="blank" href="/assets/data/contents/02_기적의_물리치료사_ko.pdf">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="/assets/data/contents/02_기적의_물리치료사_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img03.jpg" />
          </div>
          <dl>
            <dt>황좌의 게임</dt>
            <dd>황제의 21번째 황자 번으로 태어나지만 그를 기다리는 것은 끊임없는 독살의 위협과 갖은 암투!</dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <a target="blank" href="/assets/data/contents/03_황좌의_게임_ko.pdf">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="/assets/data/contents/03_황좌의_게임_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img04.jpg" />
          </div>
          <dl>
            <dt>세상을 향해 나래차기</dt>
            <dd>
              천재 선수 윤도현을 만나 태권도의 진정한 가르침을 통해 성장하며 힘을 모아 세계 태권도 한마당에 나가는
              이야기.
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <a target="blank" href="/assets/data/contents/04_세상을_향해_나래차기_ko.pdf">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="/assets/data/contents/04_세상을_향해_나래차기_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img05.jpg" />
          </div>
          <dl>
            <dt>사랑양장점</dt>
            <dd>
              “나에겐 세상 모든 사람들이 동물로 보인다.” 그런 사랑의 양장점에 조금 곤란한 손님들이 하나 둘 찾아오기
              시작하는데...
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/05_사랑양장점_ko.pdf">작품소개서</a></li>
            <li>
              <a target="blank" href="/assets/data/contents/05_사랑양장점_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img06.jpg" />
          </div>
          <dl>
            <dt>사랑이 커다래</dt>
            <dd>
              조금은 덜렁대지만 짝사랑만큼은 열혈인 울트라짱 공주 한다래. 누군가와 처음으로 사랑에 빠진 9살 소녀 다래의
              알콩달콩한 일상툰
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <a target="blank" href="/assets/data/contents/06_사랑이_커다래_ko.pdf">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="/assets/data/contents/06_사랑이_커다래_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img07.jpg" />
          </div>
          <dl>
            <dt>도시정벌</dt>
            <dd>
              불량 글로벌 기업과 악덕 국가들이 판을 치는 21세기. 그 판을 뒤엎고자 그가 돌아왔다! 이제 그 시대의 중심은…
              바로 우리들이다.
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/07_도시정벌_ko.pdf">작품소개서</a></li>
            <li><a target="blank" href="/assets/data/contents/07_도시정벌_en.pdf">Introduction</a></li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img08.jpg" />
          </div>
          <dl>
            <dt>마인화산</dt>
            <dd>
              바꾸리라!&nbsp;바꿔&nbsp;놓으리라!
              나&nbsp;천살마군&nbsp;용천산이&nbsp;검신&nbsp;한호의&nbsp;이름으로&nbsp;화산파를&nbsp;새롭게&nbsp;만들&nbsp;것이다!
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/08_마인화산_ko.pdf">작품소개서</a></li>
            <li><a target="blank" href="/assets/data/contents/08_마인화산_en.pdf">Introduction</a></li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img09.jpg" />
          </div>
          <dl>
            <dt>열혈장사꾼</dt>
            <dd>
              달은 천만번 이지러져도 그 모습 그대로이고… 장사꾼은 천만번 넘어져도 오늘 장터로 떠난다. 그것이 장사꾼의
              곤조다.
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/09_열혈장사꾼_ko.pdf">작품소개서</a></li>
            <li>
              <a target="blank" href="/assets/data/contents/09_열혈장사꾼_en.pdf">Introduction</a>
            </li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img10.jpg" />
          </div>
          <dl>
            <dt>의생진검</dt>
            <dd>
              무인은 사람을 죽이기 위해 수련하고 의원은 사람을 살리기 위해 수련한다.비정강호를 인술로 다스릴 의협이
              돌아왔다!
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/10_의생진검_ko.pdf">작품소개서</a></li>
            <li><a target="blank" href="/assets/data/contents/10_의생진검_en.pdf">Introduction</a></li>
          </ul>
        </li>
        <li class="listbox">
          <div class="img_wrap">
            <img src="/assets/images/contents/img11.jpg" />
          </div>
          <dl>
            <dt>총수</dt>
            <dd>
              남해안 18개의 조직을 접수했던 전설, 천무덕 교도소에 있는 그에게 국내 2위의 대기업, 오성그룹의 회장이
              찾아와 부탁한다.
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li><a target="blank" href="/assets/data/contents/11_총수_ko.pdf">작품소개서</a></li>
            <li><a target="blank" href="/assets/data/contents/11_총수_en.pdf">Introduction</a></li>
          </ul>
        </li>
=======
              <!-- 작품소개서 href에 링크 삽입 -->
              <a target="blank" href="">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="">Introduction</a>
            </li>
          </ul>
        </li>
>>>>>>> dev
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
@import '../../style/contents.css';
</style>
