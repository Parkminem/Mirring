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
            :style="{ backgroundImage: `url(/assets/images/careers/pangyo_1.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/pangyo_2.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/pangyo_3.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <div
            class="swiper-button-next btns"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev btns"
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
            :style="{ backgroundImage: `url(/assets/images/careers/yangjae_1.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/yangjae_2.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/yangjae_3.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/yangjae_4.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="3"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/yangjae_5.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="4"
          ></SwiperSlide>
          <div
            class="swiper-button-next btns"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev btns"
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
            :style="{ backgroundImage: `url(/assets/images/careers/jeju_1.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="0"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/jeju_2.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="1"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/jeju_3.jpg)`, height: calcHeight() + 'px' }"
            data-swiper-slide-index="2"
          ></SwiperSlide>
          <SwiperSlide
            :style="{ backgroundImage: `url(/assets/images/careers/jeju_4.jpg) `, height: calcHeight() + 'px' }"
            data-swiper-slide-index="3"
          ></SwiperSlide>
          <div
            class="swiper-button-next btns"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            @click="swiper.slideNext()"
          ></div>
          <div
            class="swiper-button-prev btns"
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const pangyo = ref(true);
const yangjae = ref(false);
const jeju = ref(false);
const swiper = ref(null);
const width = ref(innerWidth);

const pangyoSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const yangjaeSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const jejuSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};

const calcHeight = () => {
  if (width.value > 500) return 498;
  else return 298;
};
onMounted(() => {
  window.addEventListener('resize', () => {
    width.value = innerWidth;
  });
});

function activeTab(first, second, third) {
  pangyo.value = first;
  yangjae.value = second;
  jeju.value = third;
}
</script>
<style scoped lang="scss">
.section {
  background-color: #ffffff;
  padding: 100px 0 120px 0;
  .container_1076 {
    .title {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 22px;
      line-height: 1.36;
      color: #292929;
    }
    .swiper_area {
      .swiper_menu {
        display: flex;
        margin-bottom: 10px;
        > li {
          font-family: 'Noto Sans', sans-serif;
          font-size: 14px;
          line-height: 1.36;
          color: #969696;
          margin-right: 13px;
          cursor: pointer;
          &.active {
            font-weight: bold;
            color: #292929;
            font-size: 14px;
          }
          &:first-child {
            margin-left: auto;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .swiper-slide {
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 498px;
      }
      .btns {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 1;
        &:after {
          content: '';
          width: 40px;
          height: 40px;
          display: block;
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
        }
        &.swiper-button-prev {
          left: 15px;
          &:after {
            background-image: url(/assets/images/careers/White_left.png);
          }
        }
        &.swiper-button-next {
          right: 15px;
          &:after {
            background-image: url(/assets/images/careers/White_right.png);
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1076 {
      .title {
        text-align: center;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .swiper_area {
        .swiper_menu li {
          font-size: 12px;
          &.active {
            font-size: 12px;
          }
        }
        .btns {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .section .container_1076 .swiper_area .swiper-slide {
    height: 250px;
  }
}
</style>
