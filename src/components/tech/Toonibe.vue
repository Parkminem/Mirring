<template>
  <div class="toonibe bg__gray">
    <div class="container">
      <h2 class="content__title">{{ t('tech.toonivieTitle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.toonivieText')"></p>
      <div class="content__notice"><a href="https://toonivie.com/" target="_blank">{{ t('tech.toonivieBtn') }}</a></div>
      <div class="toonibe__images">
        <div class="steps"></div>
        <div class="sub__image"></div>
        <div class="toonibe__text">
          <span class="material-icons"> arrow_drop_up </span>
          <p>{{ t('tech.toonivieDesc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
