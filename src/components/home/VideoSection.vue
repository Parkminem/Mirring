<template>
  <section
    class="section dot4"
    data-name="main_business"
    :class="{ section_animation: activeSection }"
    ref="section"
    id="main04"
    :key="$route.fullPath"
  >
    <div class="container_1076">
      <div class="content">
        <div class="images mobile" style="background-image: url(/assets/images/home/business_1.png)"></div>
        <div class="box">
          <p class="title" v-html="t('home.videoTitle')"></p>
          <p class="sub_title">{{ t('home.videoSubTitle') }}</p>
          <p class="text" v-html="t('home.videoText')"></p>
        </div>
        <div class="images" style="background-image: url(/assets/images/home/business_1.png)"></div>
      </div>
      <ul class="content box_animation">
        <li class="white_box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox01') }}</p>
        </li>
        <li class="white_box boxAni" :class="{ box02: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox02') }}</p>
        </li>
        <li class="white_box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox03') }}</p>
        </li>
        <li class="white_box boxAni" :class="{ box04: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('home.videoBox04') }}</p>
        </li>
      </ul>
      <router-link to="/business" class="page_move">{{ t('common.button.businessLink') }} &gt;</router-link>
    </div>
    <p class="bg_text">Business</p>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
    if (box01.value.offsetParent.offsetParent.offsetTop + box01.value.clientHeight * 4 < scrollH)
      activeBox.value[1] = true;
    if (box02.value.offsetParent.offsetParent.offsetTop + box01.value.clientHeight * 5 < scrollH)
      activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetParent.offsetParent.offsetTop + box01.value.clientHeight * 3)
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
<style scoped></style>
