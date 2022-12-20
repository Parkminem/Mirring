<template>
  <div id="aboutFormId">
    <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
    <Department />
    <History v-if="aboutStore.historys" />
    <News />
    <Partner />
    <QuickBanner />
  </div>
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import Department from '../components/abouts/Department.vue';
import History from '../components/abouts/History.vue';
import News from '../components/abouts/News.vue';
import Partner from '../components/abouts/Partner.vue';
import QuickBanner from '../components/common/QuickBanner.vue';
import { useI18n } from 'vue-i18n';
import { useAboutStore } from '../store/about';
import i18n from '../i18n';

const { t } = useI18n();
const title = t('about.mainTitle');
const subTitle = t('about.subTitle');
const text = t('about.mainText');
const bg = '/assets/images/about/banner.png';
const locale = i18n.global.locale.value;

const aboutStore = useAboutStore();
aboutStore.historyAct(locale);
</script>

<style>
@import '../style/animation.css';
</style>
