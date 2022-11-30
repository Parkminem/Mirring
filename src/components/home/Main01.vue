<template>
  <section class="section dot1" data-name="main_home">
    <div class="container_1676">
      <div class="content">
        <p class="title">
          Let’s PLAY your<span class="orange_circle"></span><br />
          Webtoons &amp; Comics
        </p>
        <!-- <p class="text">{{ t('home.mainText') }}</p> -->
        <p class="text" v-html="t('home.mainText').replace('\n', '<br/>')"></p>
        <div class="img_box">
          <p class="bg_text">IDEACONCERT</p>
          <!-- <img class="earth" src="/resources/common/images/main/banner_earth.png" alt="earth" title="earth"/>
        <img class="cloud" src="/resources/common/images/main/banner_cloud.png" alt="cloud" title="cloud"/>
        <img class="cloud mobile" src="/resources/common/images/main/banner_cloud.png" alt="cloud" title="cloud"/>
        <img class="character_1" src="/resources/common/images/main/banner_character_1.png" alt="" />
        <img class="character_2" src="/resources/common/images/main/banner_character_2.png" alt="character_2" title="character_2"  /> -->
          <img class="earth2" alt="IDEACONCERT" src="assets/images/home/run_half-earth.gif" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
console.log(t('home.mainText').replace('\n', '<br/>'));
const text = t('home.mainText').replace('\n', '<br/>');
</script>
<style scoped></style>
