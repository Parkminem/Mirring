<template>
  <section
    class="section dot3"
    :class="{ section_animation: activeSection }"
    id="main03"
    ref="section"
    data-name="main_technology"
  >
    <div class="container_1076">
      <div :class="['content position', lang]">
        <div class="container_1096">
          <div class="images" style="background-image: url(/assets/images/home/technology_1.png)"></div>
          <div class="box">
            <p class="title" v-html="t('home.connectTitle')"></p>
            <p class="sub_title">{{ t('home.connectSubTitle') }}</p>
            <p class="text" v-html="t('home.connectText')"></p>
          </div>
        </div>
      </div>
      <ul class="content box_animation">
        <li class="white_box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle01') }}</p>
          <p class="text">{{ t('home.connectBoxText01') }}</p>
        </li>
        <li class="white_box boxAni" :class="{ box02: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle02') }}</p>
          <p class="text">{{ t('home.connectBoxText02') }}</p>
        </li>
        <li class="white_box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle03') }}</p>
          <p class="text">{{ t('home.connectBoxText03') }}</p>
        </li>
        <li class="white_box boxAni" :class="{ box04: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('home.connectBoxTitle04') }}</p>
          <p class="text">{{ t('home.connectBoxText04') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
const { t } = useI18n();
const lang = i18n.global.locale;

watch(lang, (newLang) => {
  lang = newLang;
});

//박스 애니메이션 & 섹션 슬라이드업 애니메이션
const section = ref();
const activeSection = ref(false);
const activeBox = ref({
  1: false,
  2: false
});
const box01 = ref();
const box02 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (scrollH > section.value.offsetTop) activeSection.value = true;
  if (window.innerWidth < 1025) {
    if (box01.value.offsetParent.offsetTop + box01.value.clientHeight * 3 < scrollH) activeBox.value[1] = true;
    if (box02.value.offsetParent.offsetTop + box01.value.clientHeight * 4 < scrollH) activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetParent.offsetTop + box01.value.clientHeight * 2)
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
<style></style>
