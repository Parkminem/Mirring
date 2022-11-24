<template>
  <section class="section" data-name="careers_support">
    <div class="container_1076">
      <div class="content">
        <div class="left_box">
          <p class="title">
            함께 성장할 수 있는 곳,<br />
            지금 바로 도전하세요!
          </p>
          <p class="text">
            지원서 작성 후에 이메일로 지원 바랍니다.<br />
            지원 후 담당자 분이 검토 후 별도로 연락 드립니다.
          </p>
          <ul class="contact_info">
            <li class="tel"><b>전화번호</b><span class="country_number">070-8825-5004</span></li>
            <li class="mail"><b>E-mail</b><span>recruit@ideaconcert.com</span></li>
            <a class="page_move" href="/assets/data/careers/아이디어 콘서트_입사지원서.zip" download=""
              >지원서 양식 다운로드</a
            >
          </ul>
        </div>
        <div class="right_box box_animation" ref="boxes">
          <div class="white_box">
            <div class="round"></div>
            <p class="title">학습하는 인재</p>
            <p class="text">문제에 대면했을 때 회피하지 않고 해결 방법을 찾으며 성장한다.</p>
          </div>
          <div class="white_box">
            <div class="round"></div>
            <p class="title">성장하는 인재</p>
            <p class="text">동기 부여가 되어 있으며 회사의 비전과 가치를 내재화하며 이해한다.</p>
          </div>
          <div class="white_box">
            <div class="round"></div>
            <p class="title">소통하는 인재</p>
            <p class="text">멀리 가는 길은 다함께 가는 길이라는 말을 이해하고 대화하며 협력한다.</p>
          </div>
        </div>
        <div class="mobile contact_info">
          <p class="tel"><b>전화번호</b><span class="country_number">070-8825-5004</span></p>
          <p class="mail"><b>E-mail</b><span>recruit@ideaconcert.com</span></p>
          <a class="page_move" href="/assets/data/careers/아이디어 콘서트_입사지원서.zip" download=""
            >지원서 양식 다운로드</a
          >
        </div>
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
<style scoped>
@import '../../style/careers.css';
</style>
