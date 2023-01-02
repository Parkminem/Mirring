<template>
  <section class="section" data-name="business_cost">
    <div class="container_1076">
      <p class="title" v-html="t('business.costTitle')"></p>
      <p class="text" v-html="t('business.costText')"></p>
      <div class="content">
        <div class="white_box_head">
          <ul class="arrow_box box_animation">
            <li class="boxAni" :class="{ box01: activeBox[1] }" ref="box01">
              <p class="regular_text">{{ t('business.source') }}</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
            <li class="boxAni" :class="{ box02: activeBox[1] }">
              <p class="regular_text">{{ t('business.video') }}</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
          </ul>
          <ul :class="['bold_text_box', 'box_animation', locale]">
            <li class="boxAni" ref="box02" :class="{ box01: activeBox[2] }">{{ t('business.creator') }}</li>
            <li class="boxAni" :class="{ box02: activeBox[2] }">{{ t('business.tool') }}</li>
            <li class="boxAni" :class="{ box03: activeBox[2] }">{{ t('business.platforms') }}</li>
          </ul>
        </div>
        <ul class="white_box_list box_animation">
          <li class="box boxAni" ref="box03" :class="{ box01: activeBox[3] }">
            <img class="images" src="/assets/images/business/cost_1.png" alt="cost_1" title="cost_1" />
            <p class="text" v-html="t('business.creatorBox')"></p>
          </li>
          <li class="box boxAni" :class="{ box01: activeBox[3] }">
            <img class="images" src="/assets/images/business/cost_2.png" alt="cost_2" title="cost_2" />
          </li>
          <li class="box boxAni" :class="{ box01: activeBox[3] }">
            <img class="images" src="/assets/images/business/cost_3.png" alt="cost_3" title="cost_3" />
            <p class="text" v-html="t('business.platformBox')"></p>
          </li>
        </ul>
        <div class="white_box_foot">
          <ul :class="['bold_text_box', 'box_animation', locale]">
            <li class="boxAni" ref="box04" :class="{ box01: activeBox[4] }">{{ t('business.ip') }}</li>
            <li class="boxAni" :class="{ box01: activeBox[4] }">{{ t('business.makingMovie') }}</li>
            <li class="boxAni" :class="{ box01: activeBox[4] }">{{ t('business.sellingMovie') }}</li>
          </ul>
          <ul class="arrow_box box_animation">
            <li class="boxAni" ref="box05" :class="{ box01: activeBox[5] }">
              <img src="/assets/images/business/cost_arrow_3.png" alt="arrow" title="arrow" />
              <p class="regular_text">{{ t('business.share') }}</p>
            </li>
            <li class="boxAni" :class="{ box01: activeBox[5] }">
              <img src="/assets/images/business/cost_arrow_3.png" alt="arrow" title="arrow" />
              <p class="regular_text">{{ t('business.share') }}</p>
            </li>
          </ul>
        </div>
      </div>
      <p class="cost_text">{{ t('business.calcCost01') }}</p>
      <p class="cost_text_small" v-html="t('business.calcCost02')"></p>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

//박스애니메이션
const activeBox = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
});
const box01 = ref();
const box02 = ref();
const box03 = ref();
const box04 = ref();
const box05 = ref();

function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
  if (box02.value.offsetTop + box02.value.clientHeight < scrollH) activeBox.value[2] = true;
  if (box03.value.offsetTop + box03.value.clientHeight < scrollH) activeBox.value[3] = true;
  if (box04.value.offsetTop + box04.value.clientHeight < scrollH) activeBox.value[4] = true;
  if (box05.value.offsetTop + box05.value.clientHeight < scrollH) activeBox.value[5] = true;
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
  padding: 99px 0 120px 0;
  background-color: #f9f9f9;
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
      margin: 60px 0;
      .white_box_head {
        .arrow_box {
          display: flex;
          justify-content: center;
          margin-bottom: 17px;
          li {
            margin-right: 40px;
            &:last-child {
              margin-right: 0;
            }
            img {
              width: 398.5px;
              height: 34.8px;
            }
            p {
              font-family: 'Noto Sans', sans-serif;
              font-size: 16px;
              line-height: 1.38;
              color: #292929;
              text-align: center;
              margin-bottom: 14.4px;
            }
          }
        }
        .bold_text_box {
          display: flex;
          justify-content: center;
          margin-bottom: 21px;
          &.en {
            li {
              margin-right: 245px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          &.id {
            li {
              margin-right: 265px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          &.pt {
            li {
              width: 248px;
              text-align: center;
              margin-right: 166px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          &.kr li:last-child {
            margin-right: 0;
          }
          li {
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-right: 326px;
          }
        }
      }
      .white_box_list {
        display: flex;
        .box {
          width: 248px;
          height: 313px;
          margin-right: 166px;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          &:last-child {
            margin-right: 0;
          }
          @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
              position: relative;
              &::before {
                content: '';
                position: absolute;
                right: -134.8px;
                top: 50%;
                transform: translateY(-50%);
                width: 108.8px;
                height: 38.6px;
                background-image: url(/assets/images/business/cost_arrow_1.png);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              }
            }
          }
          .text {
            font-family: 'Noto Sans', sans-serif;
            font-size: 14px;
            line-height: 1.64;
            color: #5a5a5a;
            margin-top: 37px;
            text-align: center;
          }
        }
      }
      .white_box_foot {
        .bold_text_box {
          display: flex;
          justify-content: center;
          margin-top: 24px;
          &.kr li:last-child {
            margin-right: 0;
          }
          &.en li {
            margin-right: 220px;
            &:last-child {
              margin-right: 0;
            }
          }
          &.id li {
            margin-right: 220px;
            &:last-child {
              margin-right: 0;
            }
          }
          &.pt li {
            margin-right: 248px;
            text-align: center;
            margin-right: 166px;
            &:last-child {
              margin-right: 0;
            }
          }

          li {
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-right: 326px;
          }
        }
        .arrow_box {
          display: flex;
          justify-content: center;
          margin-top: 14.4px;
          li {
            margin-right: 40px;
            &:last-child {
              margin-right: 0;
            }
            img {
              width: 398.5px;
              height: 34.8px;
            }
            p {
              font-family: 'Noto Sans', sans-serif;
              font-size: 16px;
              line-height: 1.38;
              color: #292929;
              text-align: center;
              margin-top: 14.4px;
            }
          }
        }
      }
    }
    .cost_text {
      font-family: 'Noto Sans', sans-serif;
      font-size: 16px;
      line-height: 1.38;
      color: #292929;
      margin-bottom: 11px;
      text-align: center;
    }
    .cost_text_small {
      font-family: 'Noto Sans', sans-serif;
      font-size: 14px;
      line-height: 1.36;
      color: #292929;
      text-align: center;
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1076 .content .white_box_list {
    justify-content: center;
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1076 {
      > .title {
        font-size: 12px;
        margin-bottom: 10px;
      }
      > .text {
        margin: 0;
        font-size: 12px;
      }
      .content {
        margin: 68px 0;
        .white_box_head {
          .arrow_box {
            margin-bottom: 6.6px;
            width: 66.6%;
            margin: 0 auto;
            li {
              margin-right: 2%;
              p {
                font-size: 12px;
                margin-bottom: 10px;
              }
              img {
                width: 100%;
                height: auto;
              }
            }
          }
          .bold_text_box {
            margin-bottom: 10px;
            &.en li {
              margin-right: 0;
            }
            &.id li {
              margin-right: 0;
            }
            &.pt li {
              margin-right: 0;
              width: 33%;
            }
            li {
              margin-right: 0;
              width: 33%;
              text-align: center;
              font-size: 12px;
            }
          }
        }
        .white_box_list .box {
          width: 33%;
          margin-right: 1%;
          height: auto;
          padding: 22px 10px;
          @for $i from 1 through 2 {
            &:nth-child(#{$i})::before {
              display: none;
            }
          }
          &:nth-child(2) .images {
            width: auto;
          }
          .text {
            font-size: 12px;
            margin-top: 15px;
          }
          .images {
            width: 43px;
          }
        }
        .white_box_foot {
          .bold_text_box {
            margin-top: 10px;
            &.en li {
              margin-right: 0;
            }
            &.id li {
              margin-right: 0;
            }
            &.pt li {
              margin-right: 0;
              width: 33%;
            }
            li {
              width: 33%;
              margin-right: 0;
              text-align: center;
              font-size: 12px;
            }
          }
          .arrow_box {
            width: 66.6%;
            margin: 0 auto;
            li {
              margin-right: 2%;
              img {
                width: 100%;
                height: auto;
              }
              p {
                margin-top: 10px;
                font-size: 12px;
              }
            }
          }
        }
      }
      .cost_text {
        font-size: 12px;
        font-weight: bold;
      }
      .cost_text_small {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 500px) {
  .section .container_1076 .content .white_box_list .box:nth-child(2) .images {
    width: 80px;
  }
}
</style>
