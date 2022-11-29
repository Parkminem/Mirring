<template>
  <section class="section" data-name="business_technology">
    <p class="bg_text">Webtoon<br />Movie</p>
    <div class="container_1076">
      <p class="title">이미지를 영상으로 만드는 저작기술</p>
      <p class="text">
        웹툰/만화책을 새롭게 즐길 수 있도록 영상 콘텐츠로 제작하는<br />
        이미지 분리, 자동채색, 자동번역 등의 저작기술을 연구합니다.
      </p>
      <img class="phone_img" src="/assets/images/business/technology_phone_img.png" alt="phone_img" title="phone_img" />
      <ul class="content box_animation" ref="boxes">
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">감상 플랫폼 개발</p>
          <p class="text">그림으로 된 모든 콘텐츠를 영상으로 제작합니다.</p>
        </li>
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">이미지 분리 기술</p>
          <p class="text">웹툰 동영상화 저작툴, 투니비를 개발합니다.</p>
        </li>
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">AI기반 자동채색</p>
          <p class="text">다양한 콘텐츠를 감상하는 플랫폼을 개발합니다.</p>
        </li>
        <li class="box" style="opacity: 1">
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
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
