<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <About01 />
  <About02 />
  <About03 />
  <About04 />
  <QuickBanner />
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue'
import About01 from '../components/abouts/About01.vue'
import About02 from '../components/abouts/About02.vue'
import About03 from '../components/abouts/About03.vue'
import About04 from '../components/abouts/About04.vue'
import QuickBanner from '../components/common/QuickBanner.vue'

const title = `IDEACONCERT is\nA Creative Contents Lab`
const subTitle = '언제나 즐거운 상상으로 새로운 콘텐츠와 문화기술을 만드는 아이디어 콘서트 입니다.'
const text = `아이디어 콘서트는 문화기술을 통해 세상을 즐겁게 할 콘텐츠를 만듭니다.\n만화책과 웹툰을 더 재밌게 볼 수 있도록,\n보지 못한 작품을 새로이 볼 수 있도록.\n많은 작품과 여러분이 만나는 ‘즐거운 상상’은 계속됩니다.`
const bg = '/assets/images/about/banner.png'
</script>

<style>
@import '../style/abuot.css';
</style>
