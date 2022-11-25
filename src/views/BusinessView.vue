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

const title = `A Webtoon Movie That \n Connect The World`;
const subTitle = '저작기술과 콘텐츠가 만나 새로운 비즈니스가 열립니다.';
const text = `아이디어 콘서트는 웹툰 동영상화 저작툴, 투니비를 연구합니다.\n투니비는 이미지를 분리하며, 화면연출, 사운드, 더빙, 번역 기능이 들어가 있습니다.\n또한 전문적인 영상연출팀이 최적화된 영상을 제작합니다.`;
const bg = '/assets/images/business/business.jpg';
</script>

<style>
@import '../style/business.css';
</style>
