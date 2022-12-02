<template>
  <section class="section" data-name="business_sales">
    <div class="container_1076">
      <p class="title" v-html="t('business.newTechTitle')"></p>
      <p class="text" v-html="t('business.newTechText')"></p>
      <ul class="content box_animation" ref="boxes">
        <li class="box" style="opacity: 1">
          <p class="number">01</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox01Title') }}</p>
            <p class="text">{{ t('business.newTechBox01Text') }}</p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">02</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox02Title') }}</p>
            <p class="text">{{ t('business.newTechBox02Text') }}</p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">03</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox03Title') }}</p>
            <p class="text">{{ t('business.newTechBox03Text') }}</p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">04</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox04Title') }}</p>
            <p class="text">{{ t('business.newTechBox04Text') }}</p>
          </div>
        </li>
      </ul>
      <div style="display: flex; align-items: center; justify-content: center">
        <a
          class="page_move"
          style="width: 248px; height: 46px; margin-top: 50px"
          href="https://makevu.me/d355cee78b"
          target="_blank"
          >{{ t('common.button.brochure') }}</a
        >
      </div>
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
