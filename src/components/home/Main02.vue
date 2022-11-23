<template>
  <section class="section section_animation dot2" data-name="main_about" style="margin-top: 0px; opacity: 1">
    <div class="container_1076">
      <div class="content">
        <img class="character mobile" src="/assets/images/home/character_about.png" alt="character_about" title="character_about" />
        <div class="box">
          <p class="title">
            IDEACONCERT is<br />
            A Creative Contents Lab
          </p>
          <p class="sub_title">
            언제나 즐거운 상상으로 새로운 콘텐츠와<br />
            문화기술을 만드는 아이디어 콘서트 입니다.
          </p>
          <p class="text">
            아이디어 콘서트는 문화기술을 통해 세상을 즐겁게 할 콘텐츠를 만듭니다.<br />
            만화책과 웹툰을 더 재밌게 볼 수 있도록,<br />
            보지 못한 작품을 새로이 볼 수 있도록.<br />
            많은 작품과 여러분이 만나는 ‘즐거운 상상’은 계속됩니다.<br />
          </p>
          <a class="page_move" href="https://makevu.me/d355cee78b" target="_blank">브로슈어 보기</a>
        </div>
        <img class="character" src="/assets/images/home/character_about.png" alt="character_about" title="character_about" />
      </div>
    </div>
    <p class="bg_text">About</p>
    <div class="container_1076 position">
      <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <Swiper @swiper="onSwiper" @slide-change="onSlideChange" class="box_animation" :loop="true" :slides-per-view="4" :space-between="28" :touch-ratio="0" navigation>
          <SwiperSlide data-swiper-slide-index="0" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202208051658270390.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2022 K-콘텐츠엑스포 in 싱가포르</p></SwiperSlide
          >
          <SwiperSlide data-swiper-slide-index="1" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061019000082.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2022 국제전자제품박람회 CES</p></SwiperSlide
          >
          <SwiperSlide data-swiper-slide-index="2" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061016010506.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2021 메타버스 허브 &amp; DCC 글로벌 데모데이</p>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="3" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061013540754.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">틱톡, 아이디어콘서트 MOU체결</p>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="4" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061010530051.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">메타버스 허브 ‘툰트라’ 인터뷰 진행</p></SwiperSlide
          >
          <SwiperSlide data-swiper-slide-index="5" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061008420593.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2021 넥스트콘텐츠페어</p>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="6" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061006550349.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2021 제주만화 · 웹툰피칭데이</p>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="7" class="css">
            <div class="effect_area">
              <div class="image_box" style="background-image: url(/assets/images/home/202205061002070942.jpg)"></div>
            </div>
            <p class="title ellipsis_line_2">2021 경기국제웹툰페어</p>
          </SwiperSlide>
        </Swiper>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>

      <!-- Add Arrows -->
      <!-- <img class="swiper_button_prev swiper_navigation" src="/assets/images/home/swiper_prev.png" alt="prev" title="prev" tabindex="0" role="button" aria-label="Previous slide" />
      <img class="swiper_button_next swiper_navigation" src="/assets/images/home/swiper_next.png" alt="next" title="next" tabindex="0" role="button" aria-label="Next slide" /> -->

      <a class="more" href="/about#about_news">더 보기 &gt;</a>
      <router-link to="/about" class="page_move">About Us 바로가기 &gt;</router-link>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// import { ref } from "vue";
import { Navigation } from "swiper";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
<style>
@import "../../../node_modules/swiper/swiper.min.css";
@import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
</style>
