<template>
<<<<<<< HEAD
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  </template>
  
  <script setup>
  import SubTitle from '../components/common/SubTitle.vue';
  
  const title = `IDEACONCERT is\nA Creative Contents Lab`
  const subTitle = "언제나 즐거운 상상으로 새로운 콘텐츠와 문화기술을 만드는 아이디어 콘서트 입니다."
  const text = `아이디어 콘서트는 문화기술을 통해 세상을 즐겁게 할 콘텐츠를 만듭니다.\n만화책과 웹툰을 더 재밌게 볼 수 있도록,\n보지 못한 작품을 새로이 볼 수 있도록.\n많은 작품과 여러분이 만나는 ‘즐거운 상상’은 계속됩니다.`
  const bg = "/assets/images/about/banner.png"
  </script>
  
  
  
  <style scoped></style>
=======
  <div id="aboutFormId">
    <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
    <Department />
    <History />
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
const { t } = useI18n();
const title = t('about.mainTitle');
const subTitle = t('about.subTitle');
const text = t('about.mainText');
const bg = '/assets/images/about/banner.png';
</script>

<style>
@import '../style/about.css';
@import '../style/animation.css';
</style>
>>>>>>> dev
