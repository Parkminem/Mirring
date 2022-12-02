<template>
  <div class="damda">
    <div class="container">
      <h2 class="content__title">{{ t('tech.damdaTitle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.damdaText')"></p>
      <div class="content__notice">
        <a style="color: white; font-family: NotoSans" href="https://www.hidamda.com" target="_blank">{{
          t('tech.damdaBtn')
        }}</a>
      </div>
      <div class="damda__images">
        <div class="main__image"></div>
        <div class="sub__image"></div>
      </div>
      <!-- <a class = "button" href="#">링크로 바로가기 ></a> -->
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
