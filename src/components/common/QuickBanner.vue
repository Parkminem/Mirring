<template>
  <section class="section" data-name="quick_banner">
    <div class="bg">
      <div
        :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
        @mouseenter="actives.contactActive = true"
        @mouseleave="actives.contactActive = false"
      ></div>
      <div
        :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
        @mouseenter="actives.careersActive = true"
        @mouseleave="actives.careersActive = false"
      ></div>
    </div>
    <div class="container_1548">
      <div class="content">
        <div
          :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
          @mouseenter="actives.contactActive = true"
          @mouseleave="actives.contactActive = false"
        >
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_contact.png"
            alt="character_contact"
          />
          <div class="box">
            <p class="sub_title">웹툰제작·만화출판사, 콘텐츠유통·플랫폼사</p>
            <p class="title">나의 웹툰이 영상으로 실현됩니다!</p>
            <a class="quick_move" href="/contact">문의하기</a>
          </div>
        </div>
        <div
          :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
          @mouseenter="actives.careersActive = true"
          @mouseleave="actives.careersActive = false"
        >
          <div class="box">
            <p class="sub_title">아이디어 콘서트와 함께할 인재를 찾습니다</p>
            <p class="title">함께 성장할 수 있는곳, 지금 도전하세요!</p>
            <a class="quick_move" href="/careers">지원하기</a>
          </div>
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_careers.png"
            alt="character_careers"
            title="character_careers"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const actives = ref({
  contactActive: false,
  careersActive: false
});
</script>
<style scoped>
@import '../../style/quick_banner.css';
</style>
