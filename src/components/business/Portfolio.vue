<template>
  <section class="section" data-name="business_portfolio">
    <div class="container_1076">
      <p class="title">{{ t('business.portfolio') }}</p>
      <p class="text">{{ t('business.portfolioText') }}</p>
      <div class="portfolio_box">
        <div class="youtube_area">
          <iframe
            src="https://www.youtube-nocookie.com/embed/WQyYZ70xSs4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <!-- slide -->
        <div class="slider_area" v-if="portfolioList">
          <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
            <Swiper
              :loop="true"
              :slides-per-view="2"
              :space-between="30"
              :allowTouchMove="true"
              :breakpoints="breakPoints"
              :looped-slides="portfolioList.length"
              @swiper="onSwiper"
            >
              <SwiperSlide
                :data-swiper-slide-index="idx"
                class="css"
                v-for="(item, idx) in portfolioList"
                :key="item.id"
              >
                <a :href="`https://www.youtube.com/watch?v=${item.video_id}`" target="_blank">
                  <img class="images" :src="item.thumbnail" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">{{ item.title }}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          <img
            @click="swiper.slidePrev()"
            class="swiper_button_prev swiper_navigation"
            src="@/assets/images/business/swiper_prev.png"
            alt="prev"
            title="prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
          />
          <img
            @click="swiper.slideNext()"
            class="swiper_button_next swiper_navigation"
            src="@/assets/images/business/swiper_next.png"
            alt="next"
            title="next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
          />

          <!-- slide -->
          <a class="page_move" href="https://www.youtube.com/channel/UChWHJjTGDc4314owWJ7KGCw" target="_blank"
            >{{ t('common.button.youtubeLink') }} &gt;</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import businessApi from '../../api/business';

const { t } = useI18n();
const swiper = ref(null);
const portfolioList = ref();

let onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const breakPoints = {
  1024: {
    spaceBetween: 28,
    slidesPerView: 4
  }
};
//포트폴리오 리스트 조회
businessApi
  .getPortfolio()
  .then((res) => {
    portfolioList.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
</script>
<style scoped lang="scss">
.section {
  width: 100%;
  padding: 100px 0 120px 0;
  .container_1076 {
    > .title {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 22px;
      line-height: 1.36;
      color: #292929;
      margin-bottom: 10px;
      text-align: center;
    }
    > .text {
      font-family: 'Noto Sans', sans-serif;
      font-size: 16px;
      line-height: 1.75;
      color: #292929;
      text-align: center;
    }
    .portfolio_box {
      margin: 60px 0;
      .youtube_area {
        width: 1076px;
        height: 604px;
        margin: 0 auto;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
      .slider_area {
        position: relative;
        margin-top: 31px;
        .swiper-slide {
          .images {
            width: 100%;
          }
          .title {
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-top: 10px;
            text-align: left;
          }
        }
        .swiper_button_prev,
        .swiper_button_next {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 9999;
          outline: none;
          &.swiper_button_prev {
            left: -85px;
          }
          &.swiper_button_next {
            right: -85px;
          }
        }
      }
      .page_move {
        width: 304px;
        height: 46px;
        margin: 60px auto 0 auto;
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .portfolio_box .slider_area {
    .swiper_button_next,
    .swiper_button_prev {
      display: none;
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0 80px 0;
    .container_1076 {
      > .title {
        font-size: 12px;
        margin: 0;
        margin-bottom: 10px;
      }
      > .text {
        font-size: 12px;
        margin: 0;
      }
      .portfolio_box {
        margin-top: 35px;
        margin-bottom: 0;
        .youtube_area {
          width: auto;
        }
        .slider_area {
          .swiper-slide {
            margin-right: 10px;
            .title {
              font-size: 12px;
              margin-bottom: 0;
            }
          }
          .swiper_button_next,
          .swiper_button_prev {
            display: none;
          }
        }
        .page_move {
          display: block;
          height: 46px;
          line-height: 46px;
          text-align: center;
          font-size: 15px;
          margin-top: 32px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .section .container_1076 .portfolio_box .youtube_area {
    height: 300px;
  }
}
</style>
