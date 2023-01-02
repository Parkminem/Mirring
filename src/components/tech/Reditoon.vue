<template>
  <div class="catroon__reditoon">
    <div class="container">
      <h2 class="content__title">{{ t('tech.autoToolTitle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.autoToolText')"></p>

      <div class="content__notice">
        <a
          style="color: white; font-family: NotoSans"
          href="http://www.ideaconcert.com/resources/common/images/tech/04_%EC%A2%85%EC%9D%B4%EB%A7%8C%ED%99%94%20%EC%9E%90%EB%8F%99%20%EC%9B%B9%ED%88%B0%ED%99%94%20%EC%A0%80%EC%9E%91%ED%88%B4_%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8(%EC%98%81%EB%AC%B8).pdf"
          target="_blank"
          >{{ t('tech.autoToolBtn') }}</a
        >
      </div>
      <div :class="['reditoon__image', 'shadow', lang]"></div>
    </div>
  </div>
</template>
<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
let lang = locale;
watch(lang, (newLang) => {
  lang = newLang;
});
</script>
