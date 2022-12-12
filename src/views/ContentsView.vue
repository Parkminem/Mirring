<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <ContentsList />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import ContentsList from '../components/contents/ContentsList.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const title = t('contents.mainTitle');
const subTitle = t('contents.subTitle');
const text = t('contents.mainText');
const bg = '/assets/images/contents/Contents.jpg';
</script>

<style scoped></style>
