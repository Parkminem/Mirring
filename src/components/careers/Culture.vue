<template>
  <section class="section" data-name="careers_culture">
    <div class="container_1076">
      <p class="title">공동체 문화</p>
      <ul class="content box_animation" ref="boxes">
        <li class="box">
          <div class="round"></div>
          <p class="title">탄력근무제</p>
          <p class="text">4개의 근무시간대에서 선택하여 근무 한다.</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">수평적인 조직</p>
          <p class="text">임직원 사이에도 -님, 이라는 호칭으로 부른다.</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">유연한 사고</p>
          <p class="text">문제를 대처하는 유연하고 말랑한 사고를 가진다.</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">자율성과 책임</p>
          <p class="text">업무를 자율적으로 진행하되 맡은 책임을 다한다.</p>
        </li>
        <li class="box">
          <div class="round"></div>
          <p class="title">소통과 상호존중</p>
          <p class="text">존중하는 태도로 열려있는 소통을 한다.</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import scrollEvent from '../../util/scrollEvent';
import { ref, onMounted } from 'vue';

const boxes = ref();

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
<style scoped>
@import '../../style/careers.css';
</style>
