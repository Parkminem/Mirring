<template>
  <div id="aboutFormId">
    <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
    <About01 />
    <About02 />
    <About03 />
    <About04 />
    <QuickBanner />
  </div>
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import About01 from '../components/abouts/About01.vue';
import About02 from '../components/abouts/About02.vue';
import About03 from '../components/abouts/About03.vue';
import About04 from '../components/abouts/About04.vue';
import QuickBanner from '../components/common/QuickBanner.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const title = t('about.mainTitle');
const subTitle = t('about.subTitle');
const text = t('about.mainText');
const bg = '/assets/images/about/banner.png';
</script>

<style>
@import '../style/abuot.css';
</style>
