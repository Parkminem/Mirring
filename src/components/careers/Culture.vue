<template>
  <section class="section" data-name="careers_culture">
    <div class="container_1076">
      <p class="title">{{ t('careers.community') }}</p>
      <ul class="content box_animation">
        <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community01Title') }}</p>
          <p class="text">{{ t('careers.community01Text') }}</p>
        </li>
        <li class="box boxAni" ref="box02" :class="{ box02: activeBox[2] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community02Title') }}</p>
          <p class="text">{{ t('careers.community02Text') }}</p>
        </li>
        <li class="box boxAni" ref="box03" :class="{ box03: activeBox[3] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community03Title') }}</p>
          <p class="text">{{ t('careers.community03Text') }}</p>
        </li>
        <li class="box boxAni" ref="box04" :class="{ box04: activeBox[4] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community04Title') }}</p>
          <p class="text">{{ t('careers.community04Text') }}</p>
        </li>
        <li class="box boxAni" ref="box05" :class="{ box05: activeBox[5] }">
          <div class="round"></div>
          <p class="title">{{ t('careers.community05Title') }}</p>
          <p class="text">{{ t('careers.community05Text') }}</p>
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
  if (window.innerWidth < 1025) {
    if (box01.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[1] = true;
    if (box02.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[2] = true;
    if (box03.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[3] = true;
    if (box04.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[4] = true;
    if (box05.value.offsetTop + box01.value.clientHeight < scrollH) activeBox.value[5] = true;
  } else {
    if (scrollH > box01.value.offsetTop + box01.value.clientHeight) {
      for (let key of Object.keys(activeBox.value)) {
        activeBox.value[key] = true;
      }
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
//박스 애니메이션 끝
</script>
<style scoped lang="scss">
@import '../../assets/style/animation.css';
.section {
  background-color: #ffffff;
  padding-bottom: 140px;
  .container_1076 {
    > p {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 22px;
      line-height: 1.36;
      color: #292929;
      margin-bottom: 30px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        margin-right: 85px;
        &:last-child {
          margin-right: 0;
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
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) .round {
            background-image: url(@/assets/images/careers/culture0#{$i}.png);
          }
        }
        p {
          font-family: 'Noto Sans', sans-serif;
          text-align: center;
          &.title {
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-bottom: 17px;
            width: 100%;
          }
          &.text {
            font-family: 'Noto Sans', sans-serif;
            font-size: 14px;
            line-height: 1.64;
            color: #5a5a5a;
            text-align: center;
            width: 106%;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding-bottom: 80px;
    .container_1076 {
      .content {
        flex-wrap: wrap;
        .box {
          position: relative;
          width: 100%;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
          margin: 0;
          margin-bottom: 10px;
          padding: 18px;
          .round {
            width: 76px;
            height: 76px;
            background-size: 70%;
            margin: 0;
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
          }
          p {
            &.title {
              font-size: 12px;
              margin: 0;
              margin-bottom: 10px;
              text-align: left;
              margin-left: 101px;
              width: calc(100% - 101px);
            }
            &.text {
              font-size: 12px;
              margin: 0;
              text-align: left;
              margin-left: 101px;
              width: calc(100% - 101px);
            }
          }
        }
      }
    }
  }
}
</style>
