<template>
  <section class="section" data-name="about_department">
    <div class="container_1076">
      <p class="title">{{ t('about.teams') }}</p>
      <p class="text" v-html="t('about.teamsDesc')"></p>
      <div class="content box_animation">
        <div class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox01Title') }}</p>
          <p class="text">{{ t('about.teamBox01Text') }}</p>
        </div>
        <div class="box boxAni" ref="box02" :class="{ box02: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox02Title') }}</p>
          <p class="text">{{ t('about.teamBox02Text') }}</p>
        </div>
        <div class="box boxAni" ref="box03" :class="{ box03: activeBox[3] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox03Title') }}</p>
          <p class="text">{{ t('about.teamBox03Text') }}</p>
        </div>
        <div class="box boxAni" ref="box04" :class="{ box04: activeBox[4] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox04Title') }}</p>
          <p class="text">{{ t('about.teamBox04Text') }}</p>
        </div>
        <div class="box boxAni" ref="box05" :class="{ box05: activeBox[5] }">
          <div class="round"></div>
          <p class="title">{{ t('about.teamBox05Title') }}</p>
          <p class="text">{{ t('about.teamBox05Text') }}</p>
        </div>
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
  if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
  if (box03.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[3] = true;
  if (box04.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[4] = true;
  if (box05.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[5] = true;
}
onMounted(() => {
  if (innerHeight > box01.value.offsetTop + box01.value.clientHeight) {
    for (let key of Object.keys(activeBox.value)) {
      activeBox.value[key] = true;
    }
  } else {
    window.addEventListener('scroll', scrollEvent);
  }
  //모바일 박스애니메이션
  if (window.innerWidth < 1025) window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 100px 0 120px 0;
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
      display: flex;
      margin-top: 63px;
      .box {
        width: 190px;
        min-height: 331px;
        margin-right: 32px;
        padding: 23px 25px;
        box-sizing: border-box;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        display: flex;
        align-items: center;
        flex-direction: column;
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) .round {
            background-image: url(@/assets/images/about/department_#{$i}.png);
          }
        }
        .round {
          width: 139px;
          height: 139px;
          border-radius: 50%;
          background-color: #f8f8f8;
          margin-bottom: 28px;
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
        }
        .title {
          font-family: 'Noto Sans', sans-serif;
          font-weight: bold;
          font-size: 16px;
          line-height: 1.38;
          color: #292929;
          margin-bottom: 17px;
          text-align: center;
          width: 100%;
        }
        .text {
          font-family: 'Noto Sans', sans-serif;
          font-size: 14px;
          line-height: 1.64;
          color: #5a5a5a;
          text-align: center;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1076 .content {
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
        font-size: 12px;
        margin: 0;
      }
      .content {
        display: block;
        width: 100%;
        margin: 35px auto 0 auto;
        .box {
          position: relative;
          display: block;
          width: 100%;
          min-height: 0;
          margin: 0 0 10px 0;
          padding: 18px 21px;
          overflow: hidden;
          &:last-child {
            margin-bottom: 0;
          }
          .round {
            margin-bottom: 0;
            width: 68px;
            height: 68px;
            background-size: 43px;
            position: absolute;
            left: 21px;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
          }
          .title {
            float: left;
            width: 100%;
            width: calc(100% - 68px);
            padding-left: 25px;
            box-sizing: border-box;
            font-size: 12px;
            text-align: left;
            margin-bottom: 10px;
            margin-left: 68px;
          }
          .text {
            float: left;
            width: 225px;
            width: calc(100% - 68px);
            padding-left: 25px;
            box-sizing: border-box;
            font-size: 12px;
            text-align: left;
            margin-left: 68px;
          }
        }
      }
    }
  }
}
</style>
