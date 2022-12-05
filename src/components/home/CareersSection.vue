<template>
  <section class="section section_animation" data-name="main_careers" style="margin-top: -100px">
    <div class="container_1076">
      <div class="content">
        <img
          class="character"
          src="/assets/images/home/character_careers.png"
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped></style>
