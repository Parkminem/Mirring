<template>
  <div class="cartoon__translate">
    <div class="container">
      <h2 class="content__title">{{ t('tech.translateTitle') }}</h2>
      <p id="translate__subtitle" class="content__subtitle" v-html="t('tech.translateText')"></p>
      <div class="content__notice">
        <!-- 2021년 상용화 준비 중 -->
        <a style="color: white; font-family: NotoSans" href="http://www.toontra.com">{{ t('tech.translateBtn') }}</a>
      </div>
      <div class="translate__main"></div>
      <div class="slide__container">
        <Swiper
          id="slider"
          class="translate__sub"
          @swiper="onSwiper"
          :breakpoints="breakPoints"
          :slides-per-view="1"
          :touch-ratio="0"
          :centered-slides="true"
        >
          <SwiperSlide
            class="subimage slide"
            v-for="i in 6"
            :key="i"
            :style="{ backgroundImage: `url(/src/assets/images/ourTech/translate_${locale}_${i}.png)` }"
          ></SwiperSlide>
        </Swiper>
        <button @click="preBtn()">
          <span class="material-icons" id="prev" aria-hidden="true"> arrow_back_ios </span>
        </button>
        <button @click="nextBtn()">
          <span class="material-icons" id="next" aria-hidden="true"> arrow_forward_ios </span>
        </button>
      </div>
      <span id="current__slide">{{ swiperIndex }} / 6</span>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const swiperIndex = ref(1);
const breakPoints = {
  768: {
    slidesPerView: 6
  }
};
const swiper = ref(null);
const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
function nextBtn() {
  if (swiperIndex.value == 6) {
    swiper.value.slideTo(0);
    swiperIndex.value = 1;
  } else {
    swiperIndex.value++;
    swiper.value.slideNext();
  }
}
function preBtn() {
  if (swiperIndex.value == 1) {
    swiper.value.slideTo(5);
    swiperIndex.value = 6;
  } else {
    swiperIndex.value--;
    swiper.value.slidePrev();
  }
}
</script>
