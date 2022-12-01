<template>
  <section class="section dot1" data-name="main_home">
    <div class="container_1676">
      <div class="content">
        <p class="title">
          Let’s PLAY your<span class="orange_circle"></span><br />
          Webtoons &amp; Comics
        </p>
        <p class="text" v-html="t('home.mainText')"></p>
        <div class="img_box">
          <p class="bg_text">IDEACONCERT</p>
          <img class="earth2" alt="IDEACONCERT" src="assets/images/home/run_half-earth.gif" />
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
