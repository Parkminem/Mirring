<template>
  <section class="section section_animation dot4" data-name="main_contact" style="margin-top: -100px; opacity: 1">
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped></style>
