<template>
  <section
    class="section dot2"
    :class="{ section_animation: activeSection }"
    id="main02"
    data-name="main_about"
    ref="section"
    :key="$route.fullPath"
  >
    <div class="container_1076">
      <div class="content">
        <img
          class="character mobile"
          src="/assets/images/home/character_about.png"
          alt="character_about"
          title="character_about"
        />
        <div class="box">
          <p class="title" v-html="t('home.contentsTitle')"></p>
          <p class="sub_title" v-html="t('home.contentsSubTitle')"></p>
          <p class="text" v-html="t('home.contentsText')"></p>
          <a class="page_move" href="https://makevu.me/d355cee78b" target="_blank">{{ t('common.button.brochure') }}</a>
        </div>
        <img
          class="character"
          src="/assets/images/home/character_about.png"
          alt="character_about"
          title="character_about"
        />
      </div>
    </div>
    <p class="bg_text">About</p>
    <div class="container_1076 position">
      <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <Swiper
          :loop="true"
          :slides-per-view="4"
          :space-between="0"
          :touch-ratio="0"
          :breakpoints="breakPoints"
          @swiper="onSwiper"
          class="box_animation"
        >
          <SwiperSlide data-swiper-slide-index="0" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202208051658270390.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2022 K-콘텐츠엑스포 in 싱가포르</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="1" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061019000082.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2022 국제전자제품박람회 CES</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="2" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061016010506.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2021 메타버스 허브 &amp; DCC 글로벌 데모데이</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="3" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061013540754.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">틱톡, 아이디어콘서트 MOU체결</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="4" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061010530051.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">메타버스 허브 ‘툰트라’ 인터뷰 진행</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="5" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061008420593.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2021 넥스트콘텐츠페어</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="6" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061006550349.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2021 제주만화 · 웹툰피칭데이</p>
            </router-link>
          </SwiperSlide>
          <SwiperSlide data-swiper-slide-index="7" class="css">
            <router-link to="">
              <div class="effect_area">
                <div class="image_box" style="background-image: url(/assets/images/home/202205061002070942.jpg)"></div>
              </div>
              <p class="title ellipsis_line_2">2021 경기국제웹툰페어</p>
            </router-link>
          </SwiperSlide>
        </Swiper>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <!-- Add Arrows -->
      <img
        @click="swiper.slidePrev()"
        class="swiper-button-prev swiper_navigation"
        src="/assets/images/home/swiper_prev.png"
        alt="prev"
        title="prev"
        tabindex="0"
        role="button"
        aria-label="Previous slide"
      />
      <img
        @click="swiper.slideNext()"
        class="swiper-button-next swiper_navigation"
        src="/assets/images/home/swiper_next.png"
        alt="next"
        title="next"
        tabindex="0"
        role="button"
        aria-label="Next slide"
      />
      <a href="#" class="more" @click.prevent="goNews">{{ t('common.button.more') }} &gt;</a>
      <router-link to="/about" class="page_move">{{ t('common.button.aboutLink') }} &gt;</router-link>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter();
const { t } = useI18n();
const swiper = ref(null);

const breakPoints = {
  1024: {
    spaceBetween: 28,
    slidesPerView: 4
  }
};
let onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
//더보기 클릭 시 뉴스 컴포넌트로 이동
function goNews() {
  router.push({
    path: '/about',
    hash: '#about_news'
  });
}
//섹션 슬라이드업 애니메이션
const section = ref();
const activeSection = ref(false);
function sectionAnimation() {
  if (innerHeight + scrollY > section.value.offsetTop) return (activeSection.value = true);
}
onMounted(() => {
  if (innerWidth > 1280) activeSection.value = true;
  window.addEventListener('scroll', sectionAnimation);
});
onUnmounted(() => {
  window.removeEventListener('scroll', sectionAnimation);
});
</script>
