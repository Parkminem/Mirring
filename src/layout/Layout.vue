<template>
  <Transition name="infoModal">
    <ModalContact v-if="infoModalState" />
  </Transition>
  <Header />
  <div style="display: none">
    <p>세상을 행복하게 할 100개의 아이디어/웹툰무비 플랫폼(TOONIVIE)</p>
    <p>아이디어콘서트</p>
    <p>IDEACONCERT</p>
    <p>틱톡, 아이디어콘서트 MOU체결</p>
    <p>2022 국제전자제품박람회 CES</p>
    <p>2021 경기국제웹툰페어</p>
    <p>2021 담다 홍보영상 촬영</p>
    <p>서울문화사와 계약! 쿠키런 어드벤처, 과학상식 100여권 시리즈 웹툰무비 제작</p>
    <p>인도네시아 코믹콘 2019 참여</p>
    <p>K-Comics in 코믹콘 서울 2019</p>
    <p>메타버스 허브 ‘툰트라’ 인터뷰 진행</p>
    <p>K-Content 화상 수출상담회 (KITA& KOCCA Korea COEX)</p>
    <p>온한류축제 2020</p>
    <p>나의 로맨틱 홀리데이</p>
    <p>기적의 물리치료사</p>
    <p>황좌의 게임</p>
    <p>세상을 향해 나래차기</p>
    <p>사랑양장점</p>
    <p>사랑이 커다래</p>
    <p>도시정벌</p>
    <p>마인화산</p>
    <p>열혈장사꾼</p>
    <p>알고있지만, 나쁜남자가 끌리는 이유 [알고있지만]</p>
    <p>만취 되서 망나니한테 조직이 무너지는 줄도 모르는 웹툰무비 [망나니]</p>
    <p>식당에서 고기굽다 남자가 다른 남자랑 하룻밤 보내게 된 썰 [푸드메이트]</p>
    <p>게임 경험치 현실에서 쓰는 방법 [워블]</p>
    <p>이게 드라마가 된다고?! 배우 김민규 아이돌 된다?! [성스러운 아이돌]</p>
    <p>철이와 미애하면 때밀이 춤 떠오르는 사람 드루와~ [세기말 풋사과 보습학원]</p>
    <p>100만 구독 뷰티유튜버 삼각관계 썰 푼다 [여신강림]</p>
    <p>쿠키가 아깝지 않아! 레전드 완결 웹툰 [유미의 세포들]</p>
    <p>괜찮을까? 까칠한 직장 상사와의 썸 [내일도 출근]</p>
  </div>
  <router-view :key="$route.fullPath"></router-view>
  <Footer v-if="locations" />
</template>
<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import ModalContact from '@/components/contact/ModalContact.vue';
import { useModalStore } from '@/store/modal';
import { useMapStore } from '@/store/form';

const modalStore = useModalStore();
const mapStore = useMapStore();
const { locations } = storeToRefs(mapStore);
const { infoModalState } = storeToRefs(modalStore);

//위치 리스트 조회
mapStore.locationAct();

//모달창 on/off
watch(infoModalState, (newInfoModalState) => {
  const body = document.querySelector('body');
  if (newInfoModalState) body.style.overflow = 'hidden';
  else body.style.overflow = 'auto';
});
</script>

<style lang="scss">
//transition
.infoModal-enter-from,
.infoModal-leave-to {
  opacity: 0;
}
.infoModal-enter-active,
.infoModal-leave-active {
  transition: all 0.25s ease-in-out;
}
.infoModal-enter-to,
.infoModal-leave-from {
  opacity: 1;
}
@media (max-width: 1024px) {
  #modal {
    height: 100%;
    .modal_box {
      width: 80%;
      padding: 30px;
      font-size: 12px;
    }
  }
}
</style>
