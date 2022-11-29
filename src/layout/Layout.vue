<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script setup>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

const handleScroll = (e) => {
  this.scrollPostion = e.target.scrollTop;

  if (this.scrollPosition > 100) {
    console.log('UP');
  } else {
    console.log('DOWN');
  }
};
</script>

<style scoped></style>
