<template>
  <section
    class="section dot5"
    id="main05"
    data-name="main_contact"
    :class="{ section_animation: activeSection }"
    ref="section"
  >
    <div class="container_1076">
      <div class="content">
        <img
          class="character mobile"
          src="/assets/images/home/character_contact.png"
          alt="character_contact"
          title="character_contact"
        />
        <div class="box">
          <p class="title">{{ t('home.contactTitle') }}</p>
          <p class="sub_title">{{ t('home.contactSubTitle') }}</p>
          <p class="text" v-html="t('home.contactText')"></p>
          <router-link to="/contact" class="page_move">{{ t('common.button.contactLink') }} &gt;</router-link>
        </div>
        <img
          class="character"
          src="/assets/images/home/character_contact.png"
          alt="character_contact"
          title="character_contact"
        />
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
