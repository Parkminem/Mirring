<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';

const title = `Careers`;
const subTitle = '아이디어 콘서트와 함께하세요.';
const text = `아이디어 콘서트와 함께할 새로운 인재를 기다립니다.\n확실한 목표와 비전을 세우신 분이라면\n언제라도 자신있게 지원해주세요.\n성장하는 환경과 발판을 만들어 나가겠습니다.`;
const bg = '/assets/images/careers/careers.png';
</script>

<style scoped></style>
