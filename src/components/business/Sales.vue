<template>
  <section class="section" data-name="business_sales">
    <div class="container_1076">
      <p class="title" v-html="t('business.newTechTitle')"></p>
      <p class="text" v-html="t('business.newTechText')"></p>
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <p class="number">01</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox01Title') }}</p>
            <p class="text">{{ t('business.newTechBox01Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" :class="{ box02: activeBox[1] }">
          <p class="number">02</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox02Title') }}</p>
            <p class="text">{{ t('business.newTechBox02Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
          <p class="number">03</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox03Title') }}</p>
            <p class="text">{{ t('business.newTechBox03Text') }}</p>
          </div>
        </li>
        <li class="box boxAni" :class="{ box04: activeBox[2] }">
          <p class="number">04</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">{{ t('business.newTechBox04Title') }}</p>
            <p class="text">{{ t('business.newTechBox04Text') }}</p>
          </div>
        </li>
      </ul>
      <div style="display: flex; align-items: center; justify-content: center">
        <a
          class="page_move"
          style="width: 248px; height: 46px; margin-top: 50px"
          href="https://makevu.me/d355cee78b"
          target="_blank"
          >{{ t('common.button.brochure') }}</a
        >
      </div>
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
    if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
    if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetTop + box01.value.clientHeight - 100)
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
  padding: 100px 0 119px 0;
  .container_1076 {
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
    .content {
      display: flex;
      justify-content: center;
      margin-top: 123px;
      .box {
        position: relative;
        width: 248px;
        min-height: 337px;
        margin-right: 28px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) .round {
            background-image: url(@/assets/images/business/sales_#{$i}.png);
          }
        }
        &:last-child {
          margin-right: 0;
        }
        .round {
          width: 111px;
          height: 111px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin: 18px auto 0 auto;
          background-repeat: no-repeat;
          background-size: 82px;
          background-position: center;
        }
        .images {
          width: 100%;
          height: 122px;
          object-fit: cover;
        }
        .text_box {
          padding: 18px 21px 25px 21px;
          box-sizing: border-box;
          font-family: 'Noto Sans', sans-serif;
          text-align: center;
          .title {
            font-weight: bold;
            font-size: 16px;
            color: #292929;
            line-height: 1.38;
          }
          .text {
            font-size: 14px;
            line-height: 1.64;
            color: #5a5a5a;
            padding-top: 18px;
          }
        }
        .number {
          position: absolute;
          top: -52px;
          left: 0;
          font-family: 'GmarketSansBold';
          font-weight: bold;
          color: #efefef;
          font-size: 40px;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
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
      .content {
        flex-wrap: wrap;
        margin-top: 35px;
        .box {
          width: 49%;
          margin-right: 1%;
          margin-top: 1%;
          min-height: 0;
          &:last-child {
            margin-right: 1%;
          }
          @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
              margin-top: 0;
            }
          }
          .number {
            display: none;
          }
          .text_box {
            padding: 10px;
            .title {
              font-size: 12px;
            }
            .text {
              font-size: 12px;
              padding-top: 0;
            }
          }
          .round {
            width: 89px;
            height: 89px;
            background-size: 80%;
          }
        }
      }
    }
  }
}
</style>
