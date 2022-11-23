<template>
<SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';

const title = `IDEACONCERT's Contents \n Introduction`
const subTitle = "아이디어 콘서트에서 제작한 콘텐츠 리스트입니다."
const text = `원작 스토리를 몰입도 높은 웹툰으로 제작하고 있습니다.\n 웹툰과 만화책을 영상화한 웹툰무비 작품들도 함께 만나 보세요.`
const bg = "/assets/images/contents/Contents.jpg"
</script>



<style scoped></style>
