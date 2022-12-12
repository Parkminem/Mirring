<template>
  <!-- partner -->
  <section class="section" data-name="about_partner">
    <div class="container_1076">
      <p class="title" v-html="t('about.partner')"></p>
      <p class="text" v-html="t('about.partnerText')"></p>
      <div class="content">
        <div class="box" v-for="i in partners" :style="{ backgroundImage: `url('${url}${i.logo}')` }">
          <div class="info_box">
            <p class="name">{{ i.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- //partner -->
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
import { useAboutStore } from '../../store/about';
const aboutStore = useAboutStore();
const { t } = useI18n();
const { partners } = storeToRefs(useAboutStore());
const url = 'http://data.ideaconcert.com';
const locale = i18n.global.locale.value;

//파트너사 리스트 받아오기
aboutStore.partnerAct(locale);
</script>
