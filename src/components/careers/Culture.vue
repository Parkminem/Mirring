<template>
  <section class="section" data-name="careers_culture">
    <div class="container_1076">
      <p class="title">{{ t('careers.community') }}</p>
      <ul class="content box_animation" ref="boxes">
        <li class="box">
          <div class="round"></div>
          <p class="title">{{ t('careers.community01Title') }}</p>
          <p class="text">{{ t('careers.community01Text') }}</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">{{ t('careers.community02Title') }}</p>
          <p class="text">{{ t('careers.community02Text') }}</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">{{ t('careers.community03Title') }}</p>
          <p class="text">{{ t('careers.community03Text') }}</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">{{ t('careers.community04Title') }}</p>
          <p class="text">{{ t('careers.community04Text') }}</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">{{ t('careers.community05Title') }}</p>
          <p class="text">{{ t('careers.community05Text') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import scrollEvent from '../../util/scrollEvent';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const boxes = ref();

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
<style scoped>
@import '../../style/careers.css';
</style>
