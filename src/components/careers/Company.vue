<template>
  <section class="section" data-name="careers_office">
    <div class="container_1076">
      <p class="title">{{ t('careers.place') }}</p>
      <div class="swiper_area">
        <ul class="swiper_menu" v-if="careersList">
          <li
            :class="{ active: index === activeClass }"
            v-for="(career, index) in careersList"
            :key="career.id"
            @click="selectedLocation(career.id, index)"
          >
            <p v-if="locale === 'kr'">{{ career.nameKr }}</p>
            <p v-if="locale === 'en'">{{ career.nameUs }}</p>
            <p v-if="locale === 'id'">{{ career.nameId }}</p>
            <p v-if="locale === 'pt'">{{ career.namePt }}</p>
          </li>
        </ul>
        <div class="swiper-container swiper-container-initialized swiper-container-horizontal" v-if="careersDetail">
          <Swiper :loop="true" @swiper="onSwiper">
            <SwiperSlide
              class="css"
              v-for="image in careersDetail"
              :key="image.image_save_name"
              :looped-slides="careersDetail.length"
              :style="{
                backgroundImage: `url(${url + image.img_url})`,
                height: calcHeight() + 'px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }"
            >
            </SwiperSlide>
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
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCareersStore } from '@/store/careers';
import { storeToRefs } from 'pinia';

const { t, locale } = useI18n();
const swiper = ref(null);
const width = ref(innerWidth);
const url = 'http://data.ideaconcert.com';
const activeClass = ref(0);
const careersStore = useCareersStore();
const { careersList, careersDetail } = storeToRefs(careersStore);

// 위치를 불러오는 액션
await careersStore.careersListAct();

const defaultLocation = careersList.value[0].id;
await careersStore.careersDetailAct(defaultLocation);

const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};

// 위치를 선택하면 사진을 불러오는 함수
function selectedLocation(pk, index) {
  activeClass.value = index;
  careersStore.careersDetailAct(pk);
}

const calcHeight = () => {
  if (width.value > 500) return 498;
  else return 298;
};

onMounted(() => {
  window.addEventListener('resize', () => {
    width.value = innerWidth;
  });
});
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
            background-image: url(@/assets/images/careers/White_left.png);
          }
        }
        &.swiper-button-next {
          right: 15px;
          &:after {
            background-image: url(@/assets/images/careers/White_right.png);
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
