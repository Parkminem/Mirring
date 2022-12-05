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
          <li
            v-for="i in 6"
            :key="i"
            :style="{ backgroundImage: `url(/assets/images/ourTech/translate_${lang}_${i}.png)` }"
            class="subimage slide"
          ></li>
        </ul>
        <a href="#"><i id="prev" class="fas fa-chevron-left" aria-hidden="true"></i></a>
        <a href="#"><i id="next" class="fas fa-chevron-right" aria-hidden="true"></i></a>
      </div>
      <span id="current__slide"></span>
    </div>
  </div>
</template>
<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
const { t } = useI18n();

const lang = i18n.global.locale;

watch(lang, (newLang) => {
  lang = newLang;
});
</script>
