<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <Apply />
  <Company />
  <Culture />
</template>

<script setup>
import SubTitle from '@/components/common/SubTitle.vue';
import Apply from '@/components/careers/Apply.vue';
import Company from '@/components/careers/Company.vue';
import Culture from '@/components/careers/Culture.vue';
import { useI18n } from 'vue-i18n';
import bg from '@/assets/images/careers/careers.png';
const { t } = useI18n();

const title = t('careers.mainTitle');
const subTitle = t('careers.subTitle');
const text = t('careers.mainText');
</script>
