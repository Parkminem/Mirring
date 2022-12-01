<template>
  <section class="section" data-name="business_technology">
    <p class="bg_text">Webtoon<br />Movie</p>
    <div class="container_1076">
      <p class="title">{{ t('business.produceTechTitle') }}</p>
      <p class="text" v-html="t('business.produceTechText')"></p>
      <img class="phone_img" src="/assets/images/business/technology_phone_img.png" alt="phone_img" title="phone_img" />
      <ul class="content box_animation" ref="boxes">
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox01Title') }}</p>
          <p class="text">{{ t('business.produceTechBox01Text') }}</p>
        </li>
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox02Title') }}</p>
          <p class="text">{{ t('business.produceTechBox02Text') }}</p>
        </li>
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox03Title') }}</p>
          <p class="text">{{ t('business.produceTechBox03Text') }}</p>
        </li>
        <li class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox04Title') }}</p>
          <p class="text">{{ t('business.produceTechBox04Text') }}</p>
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
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
