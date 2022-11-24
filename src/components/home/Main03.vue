<template>
  <section class="section section_animation dot3" data-name="main_technology">
    <div class="container_1076">
      <div class="content position">
        <div class="container_1096">
          <div class="images" style="background-image: url(/assets/images/home/technology_1.png)"></div>
          <div class="box">
            <p class="title">
              A Webtoon Movie That<br />
              Connect The World
            </p>
            <p class="sub_title">이미지를 영상으로 만드는 저작기술</p>
            <p class="text">
              아이디어 콘서트는 웹툰 동영상화 저작툴, 투니비를 연구합니다.<br />
              투니비는 이미지를 분리하며, 화면연출, 사운드, 더빙, 번역 기능이 있습니다.<br />
              AI를 통해 데이터를 학습하여 자동채색/번역 기술을 연구합니다.
            </p>
          </div>
        </div>
      </div>
      <ul class="content box_animation" ref="boxes">
        <li class="white_box">
          <div class="round"></div>
          <p class="title">감상 플랫폼 개발</p>
          <p class="text">그림으로 된 모든 콘텐츠를 영상으로 제작합니다.</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">이미지 분리 기술</p>
          <p class="text">웹툰 동영상화 저작툴, 투니비를 개발합니다.</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">AI기반 자동채색</p>
          <p class="text">다양한 콘텐츠를 감상하는 플랫폼을 개발합니다.</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">AI기반 자동번역</p>
          <p class="text">원천 콘텐츠를 동영상으로 제작하여 새로이 연재합니다.</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';
const boxes = ref();
onMounted(() => {
  scrollEvent.sectionAnimationByscroll();
  scrollEvent.settingBoxAnimation(boxes.value);
});
</script>
<style></style>
