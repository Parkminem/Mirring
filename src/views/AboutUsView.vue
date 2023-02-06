<template>
  <div id="aboutFormId">
    <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
    <Department />
    <History v-if="aboutStore.historys" />
    <News v-if="aboutStore.totalPage" />
    <Partner />
    <QuickBanner />
  </div>
</template>

<script setup>
import SubTitle from '@/components/common/SubTitle.vue';
import Department from '@/components/abouts/Department.vue';
import History from '@/components/abouts/History.vue';
import News from '@/components/abouts/News.vue';
import Partner from '@/components/abouts/Partner.vue';
import QuickBanner from '@/components/common/QuickBanner.vue';
import bg from '@/assets/images/about/banner.png';
import { useI18n } from 'vue-i18n';
import { useAboutStore } from '@/store/about';

const { t, locale } = useI18n();
const title = t('about.mainTitle');
const subTitle = t('about.subTitle');
const text = t('about.mainText');

const aboutStore = useAboutStore();

// @refactoring
// async 메소드를 호출 할 땐 await 붙여주세요.
// script setup 에선 최상위 구문에 await을 바로 사용할 수 있습니다.
aboutStore.historyAct(locale.value);
aboutStore.newsAct(locale.value, 1);
</script>

<style>
@import '../assets/style/animation.css';
</style>
