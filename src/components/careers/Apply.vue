<template>
  <section class="section" data-name="careers_support">
    <div class="container_1076">
      <div class="content">
        <div class="left_box">
          <p class="title" v-html="t('careers.applyTitle')"></p>
          <p class="text" v-html="t('careers.applyText')"></p>
          <ul class="contact_info">
            <li class="tel">
              <b>{{ t('careers.applyTel') }}</b
              ><span class="country_number">{{ t('careers.applyTelNum') }}</span>
            </li>
            <li class="mail">
              <b>{{ t('careers.applyEmail') }}</b
              ><span>recruit@ideaconcert.com</span>
            </li>
            <a class="page_move" href="/job.zip" download="">{{ t('common.button.downLoad') }}</a>
          </ul>
        </div>
        <div class="right_box box_animation">
          <div class="white_box boxAni" :class="{ box01: activeBox[1] }" ref="box01">
            <div class="round"></div>
            <p class="title">{{ t('careers.applyBox01Title') }}</p>
            <p class="text">{{ t('careers.applyBox01Text') }}</p>
          </div>
          <div class="white_box boxAni" :class="{ box02: activeBox[2] }" ref="box02">
            <div class="round"></div>
            <p class="title">{{ t('careers.applyBox02Title') }}</p>
            <p class="text">{{ t('careers.applyBox02Text') }}</p>
          </div>
          <div class="white_box boxAni" :class="{ box03: activeBox[3] }" ref="box03">
            <div class="round"></div>
            <p class="title">{{ t('careers.applyBox03Title') }}</p>
            <p class="text">{{ t('careers.applyBox03Text') }}</p>
          </div>
        </div>
        <div class="mobile contact_info">
          <p class="tel">
            <b>{{ t('careers.applyTel') }}</b>
            <span class="country_number">{{ t('careers.applyTelNum') }}</span>
          </p>
          <p class="mail"><b>E-mail</b><span>recruit@ideaconcert.com</span></p>
          <a class="page_move" href="/job.zip" download="">{{ t('common.button.downLoad') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

//박스애니메이션
const activeBox = ref({
  1: false,
  2: false,
  3: false
});
const box01 = ref();
const box02 = ref();
const box03 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
  if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
  if (box03.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[3] = true;
}
onMounted(() => {
  if (innerHeight > box01.value.offsetTop + box01.value.clientHeight) {
    for (let key of Object.keys(activeBox.value)) {
      activeBox.value[key] = true;
    }
  }
  //모바일 박스애니메이션
  if (window.innerWidth < 1025) window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style scoped lang="scss">
@import '../../assets/style/animation.css';
.section {
  background-color: #f9f9f9;
  padding: 100px 0 120px 0;
  .container_1076 .content {
    display: flex;
    .left_box {
      margin-right: 53px;
      p {
        font-family: 'Noto Sans', sans-serif;
        &.title {
          font-weight: bold;
          font-size: 22px;
          line-height: 1.36;
          color: #292929;
          margin-bottom: 10px;
        }
        &.text {
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .contact_info {
      margin-top: 103px;
      font-size: 16px;
      color: #292929;
      line-height: 1.38;
      font-family: 'Noto Sans', sans-serif;
      > li {
        &.tel {
          margin-bottom: 10px;
        }
        b {
          font-weight: bold;
          font-size: 16px;
          margin-right: 5px;
        }
      }
      .page_move {
        width: 386px;
        height: 46px;
        margin-top: 36px;
      }
    }
    .right_box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .white_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding: 30px 23px;
        box-sizing: border-box;
        height: 100%;
        margin-right: 20px;
        background-color: #ffffff;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        &:last-child {
          margin-right: 0;
        }
        .round {
          width: 145px;
          height: 145px;
          border-radius: 50%;
          background-color: #f8f8f8;
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
        }
        @for $i from 1 through 3 {
          &:nth-child(#{$i}) .round {
            background-image: url(@/assets/images/careers/support0#{$i}.png);
          }
        }
        p {
          font-family: 'Noto Sans', sans-serif;
          text-align: center;
          width: 100%;
          &.title {
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-top: 34px;
          }
          &.text {
            font-size: 14px;
            line-height: 1.64;
            color: #5a5a5a;
            margin-top: 18px;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1076 .content {
      flex-direction: column;
      .left_box {
        margin-right: 0;
        p {
          text-align: center;
          &.title {
            font-size: 12px;
            margin-bottom: 10px;
          }
          &.text {
            font-size: 12px;
            margin: 0;
          }
        }
      }
      .contact_info {
        display: none;
        &.mobile {
          display: block;
          text-align: center;
          margin-top: 35px;
          font-size: 12px;
          font-family: 'Noto-Sans';
          p {
            &.tel {
              margin-bottom: 30px;
            }
            b {
              display: block;
              margin-bottom: 5px;
              font-weight: 700;
            }
          }
          .page_move {
            width: 227px;
            height: 47px;
            margin: 25px auto 0 auto;
            font-size: 15px;
          }
        }
      }
      .right_box {
        margin-top: 35px;
        flex-wrap: wrap;
        .white_box {
          width: 100%;
          margin: 0;
          display: block;
          padding: 22px;
          position: relative;
          margin-bottom: 10px;
          .round {
            width: 76px;
            height: 76px;
            background-size: 70%;
            position: absolute;
            left: 22px;
            top: 50%;
            transform: translateY(-50%);
          }
          p {
            width: calc(100% - 101px);
            &.title {
              margin: 0;
              margin-left: 101px;
              font-size: 12px;
              margin-bottom: 10px;
              text-align: left;
            }
            &.text {
              font-size: 12px;
              margin: 0;
              text-align: left;
              margin-left: 101px;
            }
          }
        }
      }
    }
  }
}
</style>
