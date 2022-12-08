<template>
  <section class="section" data-name="business_sales">
    <div class="container_1076">
      <p class="title" v-html="t('business.newTechTitle')"></p>
      <p class="text" v-html="t('business.newTechText')"></p>
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <p class="number">01</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox01Title') }}</p>
            <p class="text">{{ t('business.newTechBox01Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" :class="{ box02: activeBox[1] }">
          <p class="number">02</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox02Title') }}</p>
            <p class="text">{{ t('business.newTechBox02Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <p class="number">03</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox03Title') }}</p>
            <p class="text">{{ t('business.newTechBox03Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" :class="{ box04: activeBox[2] }">
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
    if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
    if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetTop + box01.value.clientHeight - 100)
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
