<template>
  <section class="section" data-name="main_business">
    <div class="container_1076">
      <div class="content">
        <div class="images mobile" style="background-image: url(/assets/images/home/business_1.png)"></div>
        <div class="box">
          <p class="title" v-html="t('home.videoTitle')"></p>
          <p class="sub_title">{{ t('home.videoSubTitle') }}</p>
          <p class="text" v-html="t('home.videoText')"></p>
        </div>
        <div class="images" style="background-image: url(/assets/images/home/business_1.png)"></div>
      </div>
      <ul class="content box_animation" ref="boxes">
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox01') }}</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox02') }}</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox03') }}</p>
        </li>
        <li class="white_box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox04') }}</p>
        </li>
      </ul>
      <router-link to="/business" class="page_move">{{ t('common.button.businessLink') }} &gt;</router-link>
    </div>
    <p class="bg_text">Business</p>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const boxes = ref();

onMounted(() => {
  scrollEvent.settingBoxAnimation(boxes.value);
});
</script>
<style scoped></style>
