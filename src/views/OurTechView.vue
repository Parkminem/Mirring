<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  </template>
  
  <script setup>
  import SubTitle from '../components/common/SubTitle.vue';
  
  const title = `Technology That\nConnect The Contents`
  const subTitle = "콘텐츠x문화기술이 만나 새로움이 창조됩니다"
  const text = `아이디어 콘서트는 꾸준히 웹툰과 만화를 위한 기술들을 연구하고 있습니다.\n 콘텐츠와 기술이 만나 더 큰 미래를 꿈꿉니다.\n기술을 통해 더 즐거워진 콘텐츠를 만납니다.`
  const bg = "/assets/images/ourTech/banner.png"
  </script>
  
  
  
  <style scoped></style>
  