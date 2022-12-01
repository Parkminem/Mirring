<template>
  <div class="cartoon__translate">
    <div class="container">
      <h2 class="content__title">{{ t('tech.translateTitle') }}</h2>
      <p id="translate__subtitle" class="content__subtitle" v-html="t('tech.translateText')"></p>
      <div class="content__notice">
        <!-- 2021년 상용화 준비 중 -->
        <a style="color: white; font-family: NotoSans" href="http://www.toontra.com">{{ t('tech.translateBtn') }}</a>
      </div>
      <div class="translate__main"></div>
      <div class="slide__container">
        <ul id="slider" class="translate__sub">
          <li style="background-image: url('/assets/images/OurTech/translate1.png')" class="subimage slide"></li>
          <li style="background-image: url('/assets/images/OurTech/translate2.png')" class="subimage slide"></li>
          <li style="background-image: url('/assets/images/OurTech/translate3.png')" class="subimage slide"></li>
          <li style="background-image: url('/assets/images/OurTech/translate4.png')" class="subimage slide"></li>
          <li style="background-image: url('/assets/images/OurTech/translate5.png')" class="subimage slide"></li>
          <li style="background-image: url('/assets/images/OurTech/translate6.png')" class="subimage slide"></li>
        </ul>
        <a href="#"><i id="prev" class="fas fa-chevron-left" aria-hidden="true"></i></a>
        <a href="#"><i id="next" class="fas fa-chevron-right" aria-hidden="true"></i></a>
      </div>
      <span id="current__slide"></span>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
