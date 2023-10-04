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
          src="@/assets/images/home/character_about.png"
          alt="character_about"
          title="character_about"
        />
        <div class="box">
          <p class="title" v-html="t('home.contentsTitle')"></p>
          <p class="sub_title" v-html="t('home.contentsSubTitle')"></p>
          <p class="text" v-html="t('home.contentsText')"></p>
          <a class="page_move" href="/resources/common/images/tech/brochure_2023.pdf" target="_blank">{{
            t('common.button.brochure')
          }}</a>
        </div>
        <img
          class="character"
          src="@/assets/images/home/character_about.png"
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
          :looped-slides="8"
          :breakpoints="breakPoints"
          @swiper="onSwiper"
          class="box_animation"
        >
          <SwiperSlide
            :data-swiper-slide-index="idx"
            class="css"
            v-for="(news, idx) of aboutStore.newsList"
            :key="news.news_pk"
          >
            <router-link :to="{ path: '/detail', query: { pk: news.news_pk } }">
              <div class="effect_area">
                <div class="image_box" :style="{ backgroundImage: `url('${url}${news.thumbnail_file_url}')` }"></div>
              </div>
              <p class="title ellipsis_line_2" v-if="locale == 'kr'">{{ news.title_kr }}</p>
              <p class="title ellipsis_line_2" v-if="locale == 'en'">{{ news.title_us }}</p>
              <p class="title ellipsis_line_2" v-if="locale == 'id'">{{ news.title_id }}</p>
              <p class="title ellipsis_line_2" v-if="locale == 'pt'">{{ news.title_pt }}</p>
            </router-link>
          </SwiperSlide>
        </Swiper>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <!-- Add Arrows -->
      <img
        @click="swiper.slidePrev()"
        class="swiper-button-prev swiper_navigation"
        src="@/assets/images/home/swiper_prev.png"
        alt="prev"
        title="prev"
        tabindex="0"
        role="button"
        aria-label="Previous slide"
      />
      <img
        @click="swiper.slideNext()"
        class="swiper-button-next swiper_navigation"
        src="@/assets/images/home/swiper_next.png"
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
import { useAboutStore } from '@/store/about';
const router = useRouter();
const { t, locale } = useI18n();
const swiper = ref(null);
const aboutStore = useAboutStore();
const url = 'https://ideaconcert.com';

//뉴스리스트 불러오기
aboutStore.newsAct(locale.value, 1);
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
<style lang="scss" scoped>
.swiper {
  height: fit-content;
}
</style>
