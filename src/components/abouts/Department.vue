<template>
  <section class="section" data-name="about_department">
    <div class="container_1076">
      <p class="title">{{ t('about.teams') }}</p>
      <p class="text" v-html="t('about.teamsDesc')"></p>
      <div class="content box_animation">
        <div class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox01Title') }}</p>
          <p class="text">{{ t('about.teamBox01Text') }}</p>
        </div>
        <div class="box boxAni" ref="box02" :class="{ box02: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox02Title') }}</p>
          <p class="text">{{ t('about.teamBox02Text') }}</p>
        </div>
        <div class="box boxAni" ref="box03" :class="{ box03: activeBox[3] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox03Title') }}</p>
          <p class="text">{{ t('about.teamBox03Text') }}</p>
        </div>
        <div class="box boxAni" ref="box04" :class="{ box04: activeBox[4] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox04Title') }}</p>
          <p class="text">{{ t('about.teamBox04Text') }}</p>
        </div>
        <div class="box boxAni" ref="box05" :class="{ box05: activeBox[5] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox05Title') }}</p>
          <p class="text">{{ t('about.teamBox05Text') }}</p>
        </div>
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
  if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
  if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
  if (box03.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[3] = true;
  if (box04.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[4] = true;
  if (box05.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[5] = true;
}
onMounted(() => {
  if (innerHeight > box01.value.offsetTop + box01.value.clientHeight) {
    for (let key of Object.keys(activeBox.value)) {
      activeBox.value[key] = true;
    }
  }
  //모바일 박스애니메이션
  if (window.innerWidth < 1025) window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
