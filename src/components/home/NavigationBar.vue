<template>
  <nav id="navigation">
    <div
      v-for="i in 5"
      :key="route.fullPath"
      class="dot"
      :class="{ active: dots[i] }"
      :data-target="`dot${i}`"
      @click="goSection(`#main0${i}`)"
    ></div>
  </nav>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
//navigation 클릭 시 섹션 이동 함수
function goSection(hash) {
  router
    .push({
      name: 'Home',
      hash: hash
    })
    .then(console.log(route))
    .catch(() => console.log('예외'));
}
let dots = ref({
  1: true,
  2: false,
  3: false,
  4: false,
  5: false
});

//네비게이션 스크롤 이벤트
function scrollActive() {
  let scrollTop = scrollY;
  if (Math.round(document.querySelector('.dot1').offsetTop - 100) < scrollTop) {
    [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [true, false, false, false, false];
  }
  if (Math.round(document.querySelector('.dot2').offsetTop - 100) < scrollTop) {
    [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, true, false, false, false];
  }
  if (Math.round(document.querySelector('.dot3').offsetTop - 400) < scrollTop) {
    [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, true, false, false];
  }
  if (Math.round(document.querySelector('.dot4').offsetTop - 100) < scrollTop) {
    [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, false, true, false];
  }
  if (Math.round(document.querySelector('.dot5').offsetTop - 100) < scrollTop) {
    [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, false, false, true];
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollActive);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollActive);
});
</script>
<style scoped>
a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
