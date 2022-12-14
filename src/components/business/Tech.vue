<template>
  <section class="section" data-name="business_technology">
    <p class="bg_text">Webtoon<br />Movie</p>
    <div class="container_1076">
      <p class="title">{{ t('business.produceTechTitle') }}</p>
      <p class="text" v-html="t('business.produceTechText')"></p>
      <img class="phone_img" src="/assets/images/business/technology_phone_img.png" alt="phone_img" title="phone_img" />
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox01Title') }}</p>
          <p class="text">{{ t('business.produceTechBox01Text') }}</p>
        </li>
        <li class="box boxAni" :class="{ box02: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox02Title') }}</p>
          <p class="text">{{ t('business.produceTechBox02Text') }}</p>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox03Title') }}</p>
          <p class="text">{{ t('business.produceTechBox03Text') }}</p>
        </li>
        <li class="box boxAni" :class="{ box04: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('business.produceTechBox04Title') }}</p>
          <p class="text">{{ t('business.produceTechBox04Text') }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

//박스 애니메이션
const activeBox = ref({
  1: false,
  2: false
});
const box01 = ref();
const box02 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (window.innerWidth < 1025) {
    if (
      box01.value.offsetParent.offsetParent.offsetTop +
        box01.value.offsetTop +
        box01.value.offsetParent.clientHeight / 2 -
        150 <
      scrollH
    )
      activeBox.value[1] = true;
    if (
      box02.value.offsetParent.offsetParent.offsetTop +
        box02.value.offsetTop +
        box01.value.offsetParent.clientHeight / 2 -
        150 <
      scrollH
    )
      activeBox.value[2] = true;
  } else {
    if (
      scrollH >
      box01.value.offsetParent.offsetParent.offsetTop +
        box01.value.clientHeight +
        box01.value.offsetParent.clientHeight -
        100
    )
      [activeBox.value[1], activeBox.value[2]] = [true, true];
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style scoped lang="scss">
.section {
  width: 100%;
  padding: 116px 0 120px 0;
  background-color: #f9f9f9;
  position: relative;
  .bg_text {
    font-family: 'GmarketSansBold';
    font-weight: bold;
    font-size: 16.5em;
    line-height: 1.15;
    color: #f1f1f1;
    position: absolute;
    top: 146px;
    left: 42px;
  }
  .container_1076 {
    position: relative;
    z-index: 1;
    > .title {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 22px;
      line-height: 1.36;
      color: #292929;
      text-align: center;
    }
    > .text {
      font-family: 'Noto Sans', sans-serif;
      font-size: 16px;
      line-height: 1.75;
      color: #292929;
      margin-top: 10px;
      text-align: center;
    }
    .phone_img {
      width: 100%;
      margin-top: 60px;
      position: relative;
      z-index: 1;
    }
    .content {
      display: flex;
      margin-top: 30px;
      .box {
        width: 248px;
        min-height: 306px;
        margin-right: 28px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        padding: 25px 23px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        &:last-child {
          margin-right: 0;
        }
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) .round {
            background-image: url(/assets/images/business/technology_#{$i}.png);
          }
        }
        .round {
          width: 139px;
          height: 139px;
          border-radius: 50%;
          background-color: #f8f8f8;
          background-repeat: no-repeat;
          background-position: center;
        }
        .title {
          font-family: 'Noto Sans', sans-serif;
          font-weight: bold;
          font-size: 16px;
          line-height: 1.38;
          color: #292929;
          margin-top: 23px;
          width: 100%;
          text-align: center;
        }
        .text {
          font-family: 'Noto Sans', sans-serif;
          font-size: 14px;
          line-height: 1.64;
          color: #5a5a5a;
          margin-top: 16px;
          width: 100%;
          text-align: center;
          word-break: keep-all;
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1076 .content .box {
    width: 25%;
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 58px 0 45px 0;
    .bg_text {
      display: none;
    }
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
      .phone_img {
        margin-top: 35px;
      }
      .content {
        margin-top: 35px;
        flex-wrap: wrap;
        .box {
          width: 49%;
          margin-right: 1%;
          margin-top: 1%;
          min-height: 0;
          padding: 10px;
          .round {
            width: 89px;
            height: 89px;
            background-size: 70%;
          }
          .title {
            font-size: 12px;
            margin: 20px 0 10px 0;
          }
          .text {
            font-size: 12px;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
