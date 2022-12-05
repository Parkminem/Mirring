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
        <div class="slider_area">
          <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
            <Swiper
              :loop="true"
              :slides-per-view="2"
              :space-between="30"
              :allowTouchMove="true"
              :breakpoints="breakPoints"
              @swiper="onSwiper"
            >
              <SwiperSlide data-swiper-slide-index="0" class="css">
                <a href="https://www.youtube.com/watch?v=EsE0GylCp68" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/EsE0GylCp68/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">이 구역의 미친놈은 나야! 무림 최고 영재 미친놈 "천라신조"│웹툰무비</p>
                </div>
              </SwiperSlide>

              <SwiperSlide data-swiper-slide-index="1" class="css">
                <a href="https://www.youtube.com/watch?v=1_FC3mAchTE" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/1_FC3mAchTE/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">동년배가 추천하는 클라스가 다른 강호의 제왕, 웹툰무비 "혈해전기"</p>
                </div>
              </SwiperSlide>

              <SwiperSlide data-swiper-slide-index="2" class="css">
                <a href="https://www.youtube.com/watch?v=4J-zAQnvWvE" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/4J-zAQnvWvE/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">무술에 대한 모든 것? 나는 꼼수다, 아니 고수다! 웹툰무비 "하수전설"</p>
                </div>
              </SwiperSlide>
              <SwiperSlide data-swiper-slide-index="3" class="css">
                <a href="https://www.youtube.com/watch?v=Xu3U3WThK5Q" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/Xu3U3WThK5Q/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">브라이트하우스</p>
                </div>
              </SwiperSlide>

              <SwiperSlide data-swiper-slide-index="4" class="css">
                <a href="https://www.youtube.com/watch?v=zwHZMBbs1nc" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/zwHZMBbs1nc/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">
                    웹툰무비│역대급 원조 아이돌스타와 천만 여배우 사이에서 태어난 악마같은 재능을 가진 소녀 "녹스의
                    마녀"
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide data-swiper-slide-index="5" class="css">
                <a href="https://www.youtube.com/watch?v=dcUoL-qb36s" target="_blank">
                  <img class="images" src="https://i.ytimg.com/vi/dcUoL-qb36s/mqdefault.jpg" />
                </a>
                <div class="text_box">
                  <p class="title ellipsis">
                    웹툰무비│금융회사인줄 알고 취업했는데 조폭이 사채업하는 막장회사 "어둠의 자식들"
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          <img
            @click="swiper.slidePrev()"
            class="swiper_button_prev swiper_navigation"
            src="/assets/images/business/swiper_prev.png"
            alt="prev"
            title="prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
          />
          <img
            @click="swiper.slideNext()"
            class="swiper_button_next swiper_navigation"
            src="/assets/images/business/swiper_next.png"
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

const { t } = useI18n();
const swiper = ref(null);
let onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const breakPoints = {
  1024: {
    spaceBetween: 28,
    slidesPerView: 4
  }
};
</script>
<style></style>
