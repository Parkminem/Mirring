<template>
  <nav id="navigation">
    <div class="dot" data-target="dot1"></div>
    <div class="dot" data-target="dot2"></div>
    <div class="dot" data-target="dot3"></div>
    <div class="dot active" data-target="dot4"></div>
    <div class="dot" data-target="dot5"></div>
  </nav>
</template>
<script setup>
import scrollEvent from '../../util/scrollEvent';
import { onMounted } from 'vue';
onMounted(() => {
  scrollEvent.settingNavigationByScroll();
  scrollEvent.settingNavigationByClick();
});
</script>
<style></style>
