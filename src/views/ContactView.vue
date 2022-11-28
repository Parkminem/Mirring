<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <Form />
  <Map />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import Form from '../components/contact/Form.vue';
import Map from '../components/contact/Map.vue';

const title = `Contact`;
const subTitle = '아이디어 콘서트와 만나보세요.';
const text = `아이디어 콘서트의 문을 두드려주세요. \n원천 콘텐츠로 새로운 수익모델을 함께 모색하거나, \n콘텐츠 저작기술 연구에서 협업할 수 있습니다.\n많은 관심 부탁드립니다.`;
const bg = '/assets/images/contact/contact.jpg';
</script>

<style>
@import '../style/contact.css';
</style>
