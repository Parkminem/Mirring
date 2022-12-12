<template>
  <section class="section" data-name="careers_culture">
    <div class="container_1076">
      <p class="title">{{ t('careers.community') }}</p>
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community01Title') }}</p>
          <p class="text">{{ t('careers.community01Text') }}</p>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box02: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community02Title') }}</p>
          <p class="text">{{ t('careers.community02Text') }}</p>
        </li>
        <li class="box boxAni" ref="box03" :class="{ box03: activeBox[3] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community03Title') }}</p>
          <p class="text">{{ t('careers.community03Text') }}</p>
        </li>
        <li class="box boxAni" ref="box04" :class="{ box04: activeBox[4] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community04Title') }}</p>
          <p class="text">{{ t('careers.community04Text') }}</p>
        </li>
        <li class="box boxAni" ref="box05" :class="{ box05: activeBox[5] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community05Title') }}</p>
          <p class="text">{{ t('careers.community05Text') }}</p>
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
  2: false,
  3: false,
  4: false,
  5: false
});
const box01 = ref();
const box02 = ref();
const box03 = ref();
const box04 = ref();
const box05 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (window.innerWidth < 1025) {
    if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
    if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
    if (box03.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[3] = true;
    if (box04.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[4] = true;
    if (box05.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[5] = true;
  } else {
    if (scrollH > box01.value.offsetTop + box01.value.clientHeight) {
      for (let key of Object.keys(activeBox.value)) {
        activeBox.value[key] = true;
      }
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
//박스 애니메이션 끝
</script>
<style scoped>
@import '../../style/careers.css';
@import '../../style/animation.css';
</style>
