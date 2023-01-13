<template>
  <section class="section" data-name="business_team">
    <div class="container_1096">
      <p class="title">{{ t('business.movieTitle') }}</p>
      <p class="text" v-html="t('business.movieText')"></p>
      <div class="content">
        <div class="right">
          <img class="team_pc_img" src="@/assets/images/business/team_pc_img.png" alt="pc_img" title="pc_img" />
          <p class="text">
            <img class="arrow" src="@/assets/images/business/arrow_up_gray.png" alt="arrow_up" />{{
              t('business.movieDesc')
            }}
          </p>
        </div>
        <ul class="left box_animation">
          <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox01') }}</p>
          </li>
          <li class="box boxAni" :class="{ box02: activeBox[1] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox02') }}</p>
          </li>
          <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox03') }}</p>
          </li>
          <li class="box boxAni" :class="{ box04: activeBox[2] }">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox04') }}</p>
          </li>
        </ul>
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
    if (box01.value.offsetParent.offsetTop + box01.value.clientHeight * 2 < scrollH) activeBox.value[1] = true;
    if (box01.value.offsetParent.offsetTop + box01.value.clientHeight + box02.value.offsetTop < scrollH)
      activeBox.value[2] = true;
  } else {
    if (scrollH > box01.value.offsetParent.offsetTop + box01.value.clientHeight) activeBox.value[1] = true;
    if (scrollH > box02.value.offsetParent.offsetTop + box02.value.clientHeight + box02.value.offsetTop)
      activeBox.value[2] = true;
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
  padding: 100px 0 118px 0;
  .container_1096 {
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
      margin-top: 60px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .right {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        .team_pc_img {
          width: 550px;
          height: 415px;
          object-fit: contain;
        }
        .text {
          font-family: 'Noto Sans', sans-serif;
          font-size: 16px;
          line-height: 1.38;
          color: #969696;
          margin-top: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          .arrow {
            width: 10px;
            height: 8px;
            margin-right: 10px;
          }
        }
      }
      .left {
        display: flex;
        flex-wrap: wrap;
        width: 524px;
        .box {
          width: 248px;
          height: 237px;
          margin-right: 28px;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          padding: 25px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          flex-direction: column;
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
          &:nth-child(2n) {
            margin-right: 0;
          }
          @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
              margin-bottom: 30px;
            }
          }
          @for $i from 1 through 4 {
            &:nth-child(#{$i}) .round {
              background-image: url(@/assets/images/business/team_#{$i}.png);
            }
          }
          .round {
            width: 139px;
            height: 139px;
            border-radius: 50%;
            background-color: #f8f8f8;
            background-repeat: no-repeat;
            background-size: auto;
            background-position: center;
          }
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1096 .content {
    flex-direction: column;
    .right {
      position: static;
      transform: none;
    }
    .left {
      margin-top: 35px;
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1096 {
      > .title {
        font-size: 12px;
        margin-bottom: 10px;
      }
      > .text {
        font-size: 12px;
        margin: 0;
      }
      .content {
        margin-top: 35px;
        .right {
          .team_pc_img {
            width: 100%;
            height: auto;
          }
          .text {
            margin-top: 10px;
            font-size: 12px;
          }
        }
        .left {
          width: 100%;
          .box {
            width: 49%;
            margin-top: 1%;
            margin-right: 1%;
            min-height: 0;
            height: auto;
            padding: 10px;
            &:nth-child(2n) {
              margin-bottom: 0;
            }
            @for $i from 1 through 2 {
              &:nth-child(#{$i}) {
                margin-bottom: 0;
              }
            }
            .round {
              width: 89px;
              height: 89px;
              background-size: 70%;
            }
            .title {
              font-size: 12px;
              margin: 0;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
