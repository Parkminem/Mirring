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
import { onMounted, ref } from 'vue';
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

onMounted(() => {
  //네비게이션 스크롤 이벤트
  const section01H = Math.floor(document.querySelector('.dot1').getBoundingClientRect().y - 100);
  const section02H = Math.floor(document.querySelector('.dot2').getBoundingClientRect().y - 100);
  const section03H = Math.floor(document.querySelector('.dot3').getBoundingClientRect().y - 400);
  const section04H = Math.floor(document.querySelector('.dot4').getBoundingClientRect().y - 100);
  const section05H = Math.floor(document.querySelector('.dot5').getBoundingClientRect().y - 100);
  window.addEventListener('scroll', () => {
    let scrollTop = scrollY;
    if (section01H < scrollTop) {
      [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [true, false, false, false, false];
    }
    if (section02H < scrollTop) {
      [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, true, false, false, false];
    }
    if (section03H < scrollTop) {
      [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, true, false, false];
    }
    if (section04H < scrollTop) {
      [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, false, true, false];
    }
    if (section05H < scrollTop) {
      [dots.value[1], dots.value[2], dots.value[3], dots.value[4], dots.value[5]] = [false, false, false, false, true];
    }
  });
});
</script>
<style scoped>
a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
