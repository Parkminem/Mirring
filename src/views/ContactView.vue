<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <Form />
  <Map v-if="locations" />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import Form from '../components/contact/Form.vue';
import Map from '../components/contact/Map.vue';
import { useI18n } from 'vue-i18n';
import { useMapStore } from '../store/form';
import { storeToRefs } from 'pinia';
const { t } = useI18n();
const title = t('contact.mainTitle');
const subTitle = t('contact.subTitle');
const text = t('contact.mainText');
const bg = '/assets/images/contact/contact.jpg';
const mapStore = useMapStore();
const { locations } = storeToRefs(mapStore);
</script>
