<template>
  <section class="section" data-name="business_team">
    <div class="container_1096">
      <p class="title">이미지를 영상으로 만드는 영상제작팀</p>
      <p class="text">
        웹툰 및 만화 IP를 공급받으면, 사내 전문적인 영상 연출팀을 통해서<br />
        동영상화 콘텐츠를 일주일에 30편, 한달이면 120편을 제작할 수 있습니다.
      </p>
      <div class="content">
        <div class="right">
          <img class="team_pc_img" src="/assets/images/business/team_pc_img.png" alt="pc_img" title="pc_img" />
          <p class="text">
            <img class="arrow" src="/assets/images/business/arrow_up_gray.png" alt="arrow_up" />이미지를 영상으로
            제작하는 저작툴
          </p>
        </div>
        <ul class="left box_animation" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">영상 외주 제작</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">캐릭터 홍보영상 제작</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">회사소개 영상 제작</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">콘텐츠 공동 사업</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';

const boxes = ref();

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
