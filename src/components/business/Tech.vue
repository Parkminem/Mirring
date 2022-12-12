<template>
  <section class="section" data-name="business_technology">
    <p class="bg_text">Webtoon<br />Movie</p>
    <div class="container_1076">
      <p class="title">{{ t('business.produceTechTitle') }}</p>
      <p class="text" v-html="t('business.produceTechText')"></p>
      <img class="phone_img" src="/assets/images/business/technology_phone_img.png" alt="phone_img" title="phone_img" />
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox01Title') }}</p>
          <p class="text">{{ t('business.produceTechBox01Text') }}</p>
        </li>
        <li class="box boxAni" :class="{ box02: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox02Title') }}</p>
          <p class="text">{{ t('business.produceTechBox02Text') }}</p>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox03Title') }}</p>
          <p class="text">{{ t('business.produceTechBox03Text') }}</p>
        </li>
        <li class="box boxAni" :class="{ box04: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox04Title') }}</p>
          <p class="text">{{ t('business.produceTechBox04Text') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

//박스 애니메이션
const activeBox = ref({
  1: false,
  2: false
});
const box01 = ref();
const box02 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (window.innerWidth < 1025) {
    if (
      box01.value.offsetParent.offsetParent.offsetTop +
        box01.value.offsetTop +
        box01.value.offsetParent.clientHeight / 2 -
        150 <
      scrollH
    )
      activeBox.value[1] = true;
    if (
      box02.value.offsetParent.offsetParent.offsetTop +
        box02.value.offsetTop +
        box01.value.offsetParent.clientHeight / 2 -
        150 <
      scrollH
    )
      activeBox.value[2] = true;
  } else {
    if (
      scrollH >
      box01.value.offsetParent.offsetParent.offsetTop +
        box01.value.clientHeight +
        box01.value.offsetParent.clientHeight -
        100
    )
      [activeBox.value[1], activeBox.value[2]] = [true, true];
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style>
@import '../../style/animation.css';
</style>
