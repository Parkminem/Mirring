<template>
  <section class="section dot1" id="main01" data-name="main_home" :key="$route.fullPath">
    <div class="container_1676">
      <div class="content">
        <p class="title">
          Let’s PLAY your<span class="orange_circle"></span><br />
          Webtoons &amp; Comics
        </p>
        <p class="text" v-html="t('home.mainText')"></p>
        <div class="img_box">
          <p class="bg_text">IDEACONCERT</p>
          <img class="earth2" alt="IDEACONCERT" src="@/assets/images/home/run_half-earth.gif" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<!-- <style scoped lang="scss">
.section {
  background-color: #ff943a;
  padding-top: 130px;
  overflow: hidden;
  .container_1676 .content {
    position: relative;
    .title {
      position: relative;
      font-family: 'GmarketSansBold';
      font-weight: bold;
      font-size: 5.85em;
      color: #fff;
      text-align: center;
      margin-bottom: 36px;
      line-height: 93px;
      .orange_circle {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: -12px;
          left: 20px;
          width: 28px;
          height: 28px;
          background-color: #ec6c00;
          border-radius: 50%;
        }
      }
    }
    .text {
      font-family: 'Noto Sans', sans-serif;
      font-size: 18px;
      line-height: 1.7;
      color: #292929;
      text-align: center;
      margin-top: 10px;
    }
    .img_box {
      position: relative;
      margin: 221px auto 0 auto;
      width: 447px;
      height: 139px;
      .earth2 {
        position: absolute;
        top: -165px;
        width: 100%;
        transform-origin: 50% 50%;
        padding: 20px;
        box-sizing: border-box;
        -webkit-transform-origin: 50% 50%;
      }
      .bg_text {
        position: absolute;
        left: 50%;
        top: -165px;
        transform: translateX(-50%);
        font-family: 'GmarketSansBold';
        font-weight: bold;
        font-size: 185px;
        line-height: 1.09;
        color: #fe8e30;
        -webkit-transform: translateX(-50%);
      }
    }
  }
}
@media (max-width: 1676px) {
  .section .container_1676 .content .img_box .bg_text {
    font-size: 120px;
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 119px 0 100px 0;
    .container_1676 .content {
      .title {
        font-size: 2.45em;
        margin-bottom: 33px;
        line-height: 39px;
        .orange_circle::before {
          left: 0;
          width: 17px;
          height: 17px;
        }
      }
      .text {
        margin-top: 0;
        font-size: 12px;
      }
      .img_box {
        margin-top: 177px;
        width: 184px;
        height: 185px;
        .bg_text {
          top: -70px;
          font-size: 48px;
        }
        .earth2 {
          width: 284px;
          height: 255px;
          padding: 0;
          display: block;
          margin: 0 auto;
          left: -50px;
          top: 30px;
        }
      }
    }
  }
}
</style> -->
