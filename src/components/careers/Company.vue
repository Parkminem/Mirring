<template>
  <section class="section" data-name="careers_office">
    <div class="container_1076">
      <p class="title">{{ t('careers.place') }}</p>
      <div class="swiper_area">
        <ul class="swiper_menu">
          <li :class="{ active: pangyo }" data-name="pangyo" @click="activeTab(true, false, false)">판교</li>
          <li :class="{ active: yangjae }" data-name="yangjae" @click="activeTab(false, true, false)">양재</li>
          <li :class="{ active: jeju }" data-name="jeju" @click="activeTab(false, false, true)">제주</li>
        </ul>
        <!-- pangyo -->
        <Swiper @swiper="pangyoSwiper" data-name="pangyo" v-if="pangyo" :loop="true">
          <SwiperSlide
            style="background-image: url(/assets/images/careers/pangyo_1.jpg)"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/pangyo_2.jpg)"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/pangyo_3.jpg)"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            @click="swiper.slidePrev()"
          ></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </Swiper>
        <!-- //pangyo -->
        <!-- yangjae -->
        <Swiper @swiper="yangjaeSwiper" data-name="yangjae" v-if="yangjae" :loop="true">
          <SwiperSlide
            style="background-image: url(/assets/images/careers/yangjae_1.jpg)"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/yangjae_2.jpg)"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/yangjae_3.jpg)"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/yangjae_4.jpg)"
            data-swiper-slide-index="3"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/yangjae_5.jpg)"
            data-swiper-slide-index="4"
          ></SwiperSlide>
          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            @click="swiper.slidePrev()"
          ></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </Swiper>
        <!-- //yangjae -->
        <!-- jeju -->
        <Swiper @swiper="jejuSwiper" data-name="jeju" v-if="jeju" :loop="true">
          <SwiperSlide
            style="background-image: url(/assets/images/careers/jeju_1.jpg)"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/jeju_2.jpg)"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/jeju_3.jpg)"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <SwiperSlide
            style="background-image: url(/assets/images/careers/jeju_4.jpg)"
            data-swiper-slide-index="3"
          ></SwiperSlide>
          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            @click="swiper.slidePrev()"
          ></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </Swiper>
        <!-- //jeju -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const pangyo = ref(true);
const yangjae = ref(false);
const jeju = ref(false);
const swiper = ref(null);

const pangyoSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const yangjaeSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const jejuSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};

function activeTab(first, second, third) {
  pangyo.value = first;
  yangjae.value = second;
  jeju.value = third;
}
</script>
<style>
@import '../../style/careers.css';
</style>
