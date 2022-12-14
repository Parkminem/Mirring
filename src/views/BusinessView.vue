<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <List />
  <Sales />
  <Tech />
  <Team />
  <Cost />
  <Portfolio />
  <QuickBanner />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import List from '../components/business/List.vue';
import Sales from '../components/business/Sales.vue';
import Tech from '../components/business/Tech.vue';
import Team from '../components/business/Team.vue';
import Cost from '../components/business/Cost.vue';
import Portfolio from '../components/business/Portfolio.vue';
import QuickBanner from '../components/common/QuickBanner.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const title = t('business.mainTitle');
const subTitle = t('business.subTitle');
const text = t('business.mainText');
const bg = '/assets/images/business/business.jpg';
</script>

<style>
@import '../style/animation.css';
</style>
