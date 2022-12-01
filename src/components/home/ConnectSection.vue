<template>
  <section class="section section_animation dot3" data-name="main_technology">
    <div class="container_1076">
      <div class="content position">
        <div class="container_1096">
          <div class="images" style="background-image: url(/assets/images/home/technology_1.png)"></div>
          <div class="box">
            <p class="title" v-html="t('home.connectTitle')"></p>
            <p class="sub_title">{{ t('home.connectSubTitle') }}</p>
            <p class="text" v-html="t('home.connectText')"></p>
          </div>
        </div>
      </div>
      <ul class="content box_animation" ref="boxes">
        <li class="white_box">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle01') }}</p>
          <p class="text">{{ t('home.connectBoxText01') }}</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle02') }}</p>
          <p class="text">{{ t('home.connectBoxText02') }}</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle03') }}</p>
          <p class="text">{{ t('home.connectBoxText03') }}</p>
        </li>
        <li class="white_box">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle04') }}</p>
          <p class="text">{{ t('home.connectBoxText04') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const boxes = ref();
onMounted(() => {
  scrollEvent.sectionAnimationByscroll();
  scrollEvent.settingBoxAnimation(boxes.value);
});
</script>
<style></style>
