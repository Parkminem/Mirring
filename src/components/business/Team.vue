<template>
  <section class="section" data-name="business_team">
    <div class="container_1096">
      <p class="title">{{ t('business.movieTitle') }}</p>
      <p class="text" v-html="t('business.movieText')"></p>
      <div class="content">
        <div class="right">
          <img class="team_pc_img" src="/assets/images/business/team_pc_img.png" alt="pc_img" title="pc_img" />
          <p class="text">
            <img class="arrow" src="/assets/images/business/arrow_up_gray.png" alt="arrow_up" />{{
              t('business.movieDesc')
            }}
          </p>
        </div>
        <ul class="left box_animation">
          <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox01') }}</p>
          </li>
          <li class="box boxAni" :class="{ box02: activeBox[1] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox02') }}</p>
          </li>
          <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox03') }}</p>
          </li>
          <li class="box boxAni" :class="{ box04: activeBox[2] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox04') }}</p>
          </li>
        </ul>
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
    if (box01.value.offsetParent.offsetTop + box01.value.clientHeight * 2 < scrollH) activeBox.value[1] = true;
    if (box01.value.offsetParent.offsetTop + box01.value.clientHeight + box02.value.offsetTop < scrollH)
      activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetParent.offsetTop + box01.value.clientHeight) activeBox.value[1] = true;
    if (scrollH > box02.value.offsetParent.offsetTop + box02.value.clientHeight + box02.value.offsetTop)
      activeBox.value[2] = true;
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
