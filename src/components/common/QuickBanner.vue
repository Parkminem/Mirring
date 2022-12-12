<template>
  <section class="section" data-name="quick_banner">
    <div class="bg">
      <div
        :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
        @mouseenter="actives.contactActive = true"
        @mouseleave="actives.contactActive = false"
      ></div>
      <div
        :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
        @mouseenter="actives.careersActive = true"
        @mouseleave="actives.careersActive = false"
      ></div>
    </div>
    <div class="container_1548">
      <div class="content">
        <div
          :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
          @mouseenter="actives.contactActive = true"
          @mouseleave="actives.contactActive = false"
        >
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_contact.png"
            alt="character_contact"
          />
          <div class="box">
            <p class="sub_title" v-html="t('common.banner.leftSubTitle')"></p>
            <p class="title">{{ t('common.banner.leftTitle') }}</p>
            <a class="quick_move" href="/contact">{{ t('common.button.contactLink') }}</a>
          </div>
        </div>
        <div
          :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
          @mouseenter="actives.careersActive = true"
          @mouseleave="actives.careersActive = false"
        >
          <div class="box">
            <p class="sub_title">{{ t('common.banner.rightSubTitle') }}</p>
            <p class="title" v-html="t('common.banner.rightTitle')"></p>
            <a class="quick_move" href="/careers">{{ t('common.button.careersLink') }}</a>
          </div>
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_careers.png"
            alt="character_careers"
            title="character_careers"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const actives = ref({
  contactActive: false,
  careersActive: false
});
</script>
<style scoped>
@import '../../style/quick_banner.css';
</style>
