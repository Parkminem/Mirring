<template>
  <div class="catroon__reditoon">
    <div class="container">
      <h2 class="content__title">{{ t('tech.autoToolTitle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.autoToolText')"></p>

      <div class="content__notice">
        <a
          style="color: white; font-family: NotoSans"
          href="/resources/common/images/tech/04_종이만화 자동 웹툰화 저작툴_카달로그(국문).pdf"
          target="_blank"
          v-html="t('tech.autoToolBtn')"
        ></a>
      </div>
      <div class="reditoon__image_kr shadow"></div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
