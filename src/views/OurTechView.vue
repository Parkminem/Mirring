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
import SubTitle from '@/components/common/SubTitle.vue';
import Reditoon from '@/components/tech/Reditoon.vue';
import QuickBanner from '@/components/common/QuickBanner.vue';
import AutoCut from '@/components/tech/AutoCut.vue';
import Translate from '@/components/tech/Translate.vue';
import ContentViewer from '@/components/tech/Contentviewer.vue';
import Damda from '@/components/tech/Damda.vue';
import Toonibe from '@/components/tech/Toonibe.vue';
import bg from '@/assets/images/ourTech/banner.png';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const title = t('tech.mainTitle');
const subTitle = t('tech.subTitle');
const text = t('tech.mainText');
</script>

<style>
@import '../assets/style/tech.css';
</style>
