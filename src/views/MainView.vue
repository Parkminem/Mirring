<template>
  <NavigationBar />
  <div id="main">
    <MainVisual />
    <ContentsSection />
    <ConnectSection />
    <VideoSection />
    <ContactSection />
    <CareersSection />
  </div>
</template>
<script setup>
import NavigationBar from '@/components/home/NavigationBar.vue';
import MainVisual from '@/components/home/MainVisual.vue';
import ContentsSection from '@/components/home/ContentsSection.vue';
import ConnectSection from '@/components/home/ConnectSection.vue';
import VideoSection from '@/components/home/VideoSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';
import CareersSection from '@/components/home/CareersSection.vue';
</script>

<style>
@import '../assets/style/main.css';
@import '../assets/style/animation.css';
</style>
