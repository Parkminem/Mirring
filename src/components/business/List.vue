<template>
  <section class="section" data-name="business_list">
    <div class="business_list_menu">
      <div class="container_1076">
        <ul class="content">
          <li class="menu" :class="{ active: actives.contents }" @click="onActive('contents')">
            {{ t('business.produce') }}
          </li>
          <li class="menu" :class="{ active: actives.culture }" @click="onActive('culture')">
            {{ t('business.research') }}
          </li>
          <li class="menu" :class="{ active: actives.translation }" @click="onActive('translation')">
            {{ t('business.translation') }}
          </li>
          <li class="menu" :class="{ active: actives.platform }" @click="onActive('platform')">
            {{ t('business.platform') }}
          </li>
        </ul>
      </div>
    </div>
    <div class="business_list_box">
      <div class="container_1076">
        <ul class="content box_animation" v-if="actives.contents">
          <li class="box boxAni" :class="{ box01: activeBox[1] }" ref="box01">
            <div class="round" style="background-image: url('/src/assets/images/business/list_1_1.png')"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox01Title') }}</p>
              <p class="text">
                {{ t('business.produceBox01Text') }}
              </p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box02: activeBox[1] }">
            <div class="round" style="background-image: url(/src/assets/images/business/list_1_2.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox02Title') }}</p>
              <p class="text">{{ t('business.produceBox02Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box03: activeBox[2] }" ref="box02">
            <div class="round" style="background-image: url(/src/assets/images/business/list_1_3.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox03Title') }}</p>
              <p class="text">{{ t('business.produceBox03Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box04: activeBox[2] }">
            <div class="round" style="background-image: url(/src/assets/images/business/list_1_4.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox04Title') }}</p>
              <p class="text">{{ t('business.produceBox04Text') }}</p>
            </div>
          </li>
        </ul>
        <ul class="content box_animation" v-if="actives.culture">
          <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_2_1.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox01Title') }}</p>
              <p class="text">{{ t('business.researchBox01Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box02: activeBox[1] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_2_2.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox02Title') }}</p>
              <p class="text">{{ t('business.researchBox02Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_2_3.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox03Title') }}</p>
              <p class="text">{{ t('business.researchBox03Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box04: activeBox[2] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_2_4.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox04Title') }}</p>
              <p class="text">{{ t('business.researchBox04Text') }}</p>
            </div>
          </li>
        </ul>
        <ul class="content box_animation" v-if="actives.translation">
          <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
            <div class="round" style="background-image: url(/src/assets/images/business/list_3_1.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox01Title') }}</p>
              <p class="text">{{ t('business.translationBox01Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" :class="{ box02: activeBox[1] }">
            <div class="round" style="background-image: url(/src/assets/images/business/list_3_2.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox02Title') }}</p>
              <p class="text">{{ t('business.translationBox02Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" ref="box02" :class="{ box03: activeBox[2] }">
            <div class="round" style="background-image: url(/src/assets/images/business/list_3_3.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox03Title') }}</p>
              <p class="text">{{ t('business.translationBox03Text') }}</p>
            </div>
          </li>
        </ul>
        <ul class="content box_animation" v-if="actives.platform">
          <li class="box boxAni" ref="box01" :class="{ box01: activeBox[1] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_4_1.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.platformBox01Title') }}</p>
              <p class="text">{{ t('business.platformBox01Text') }}</p>
            </div>
          </li>
          <li class="box boxAni" ref="box02" :class="{ box02: activeBox[2] }">
            <div class="images" style="background-image: url(/src/assets/images/business/list_4_2.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.platformBox02Title') }}</p>
              <p class="text">{{ t('business.platformBox02Text') }}</p>
            </div>
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

//탭 이동
const actives = ref({
  contents: true,
  culture: false,
  translation: false,
  platform: false
});
const onActive = (active) => {
  for (let active in actives.value) {
    if (actives.value[active] === true) {
      actives.value[active] = false;
    }
  }
  actives.value[active] = !actives.value[active];
};

//박스 애니메이션
const activeBox = ref({
  1: false,
  2: false
});
const box01 = ref();
const box02 = ref();
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  if (box01.value.offsetTop + box01.value.clientHeight < scrollH) {
    activeBox.value[1] = true;
  }
  if (box02.value.offsetTop + box02.value.clientHeight < scrollH) {
    activeBox.value[2] = true;
  }
}
onMounted(() => {
  if (innerHeight > box01.value.offsetTop + box01.value.clientHeight)
    [activeBox.value[1], activeBox.value[2]] = [true, true];
  if (window.innerWidth < 1024) window.addEventListener('scroll', scrollEvent);
  else {
    [activeBox.value[1], activeBox.value[2]] = [true, true];
  }
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style lang="scss" scoped>
.section {
  .business_list_menu {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    .container_1076 .content {
      display: flex;
      .menu {
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
        font-size: 16px;
        line-height: 1.38;
        color: #292929;
        text-align: center;
        width: 25%;
        padding: 24px 0 21px 0;
        cursor: pointer;
        &.active {
          color: #ec6c00;
        }
      }
    }
  }
  .business_list_box {
    padding: 40px 0 60px 0;
    background-color: #f9f9f9;
    .container_1076 .content {
      display: flex;
      justify-content: center;
      &.active {
        display: flex;
      }
      .box {
        width: 248px;
        min-height: 337px;
        margin-right: 28px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        &:last-child {
          margin-right: 0;
        }
        .images {
          width: 100%;
          height: 130px;
          object-fit: cover;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        .round {
          width: 122px;
          height: 122px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin: 15px auto 10px auto;
          background-repeat: no-repeat;
          background-size: 70%;
          background-position: center;
        }
        .text_box {
          padding: 17px 18px;
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
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    .business_list_menu .container_1076 .content {
      flex-wrap: wrap;
      .menu {
        width: 50%;
        font-size: 14px;
        padding: 28px 0 26px 0;
        &.active {
          background-color: #f9f9f9;
        }
      }
    }
    .business_list_box {
      padding: 20px 0 40px 0;
      .container_1076 .content {
        flex-wrap: wrap;
        justify-content: flex-start;
        &:nth-child(3) .box:last-child {
          margin-right: auto;
        }
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
          .round {
            width: 89px;
            height: 89px;
          }
          .text_box {
            padding: 10px;
            .title {
              font-size: 12px;
            }
            .text {
              font-size: 12px;
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
