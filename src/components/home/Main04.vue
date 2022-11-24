<template>
  <section class="section" data-name="main_business">
    <div class="container_1076">
      <div class="content">
        <div class="images mobile" style="background-image: url(/assets/images/home/business_1.png)"></div>
        <div class="box">
          <p class="title">
            Re-create All Images<br />
            Contents Into Video
          </p>
          <p class="sub_title">이미지를 영상으로 만드는 영상제작팀</p>
          <p class="text">
            웹툰 및 만화 IP를 공급받으면, 사내 전문적인 영상 연출팀을 통해서<br />
            동영상화 콘텐츠를 일주일에 30편, 한달이면 120편을 제작할 수 있습니다.
          </p>
        </div>
        <div class="images" style="background-image: url(/assets/images/home/business_1.png)"></div>
      </div>
      <ul class="content box_animation" ref="boxes">
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">영상 외주 제작</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">캐릭터 홍보영상 제작</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">회사소개 영상 제작</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">콘텐츠 공동 사업</p>
        </li>
      </ul>
      <router-link to="/business" class="page_move">Business 바로가기 &gt;</router-link>
    </div>
    <p class="bg_text">Business</p>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';

const boxes = ref();

onMounted(() => {
  scrollEvent.settingBoxAnimation(boxes.value);
});
</script>
<style scoped></style>
