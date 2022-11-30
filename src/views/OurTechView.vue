<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <div class="content">
    <Reditoon />
    <AutoCut />
    <Translate />
    <ContentViewer />
    <Damda />
    <Toonibe />
  </div>
  <QuickBanner />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import Reditoon from '../components/tech/Reditoon.vue';
import QuickBanner from '../components/common/QuickBanner.vue';
import AutoCut from '../components/tech/AutoCut.vue';
import Translate from '../components/tech/Translate.vue';
import ContentViewer from '../components/tech/Contentviewer.vue';
import Damda from '../components/tech/Damda.vue';
import Toonibe from '../components/tech/Toonibe.vue';

const title = `Technology That\nConnect The Contents`;
const subTitle = '콘텐츠x문화기술이 만나 새로움이 창조됩니다';
const text = `아이디어 콘서트는 꾸준히 웹툰과 만화를 위한 기술들을 연구하고 있습니다.\n 콘텐츠와 기술이 만나 더 큰 미래를 꿈꿉니다.\n기술을 통해 더 즐거워진 콘텐츠를 만납니다.`;
const bg = '/assets/images/ourTech/banner.png';
</script>

<style>
@import '../style/tech/main.css';
</style>
