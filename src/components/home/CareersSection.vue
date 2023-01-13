<template>
  <section
    class="section"
    data-name="main_careers"
    :class="{ section_animation: activeSection }"
    ref="section"
    :key="$route.fullPath"
  >
    <div class="container_1076">
      <div class="content">
        <img
          class="character"
          src="@/assets/images/home/character_careers.png"
          alt="character_careers"
          title="character_careers"
        />
        <div class="box">
          <p class="title">{{ t('home.careersTitle') }}</p>
          <p class="sub_title">{{ t('home.careersSubTitle') }}</p>
          <p class="text" v-html="t('home.careersText')"></p>
          <router-link to="/careers" class="page_move">{{ t('common.button.careersLink') }} &gt;</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

//섹션 슬라이드업 애니메이션
const section = ref();
const activeSection = ref(false);
function sectionAnimation() {
  if (scrollY + innerHeight > section.value.offsetTop) activeSection.value = true;
}
onMounted(() => {
  window.addEventListener('scroll', sectionAnimation);
});
onUnmounted(() => {
  window.removeEventListener('scroll', sectionAnimation);
});
</script>
