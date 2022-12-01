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
        <!-- 01 -->
        <ul class="content box_animation" :class="{ active: actives.contents }" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_1.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox01Title') }}</p>
              <p class="text">
                {{ t('business.produceBox01Text') }}
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_2.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox02Title') }}</p>
              <p class="text">{{ t('business.produceBox02Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_3.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox03Title') }}</p>
              <p class="text">{{ t('business.produceBox03Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_4.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.produceBox04Title') }}</p>
              <p class="text">{{ t('business.produceBox04Text') }}</p>
            </div>
          </li>
        </ul>
        <!-- //01 -->
        <!-- 02 -->
        <ul class="content box_animation" :class="{ active: actives.culture }">
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_1.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox01Title') }}</p>
              <p class="text">{{ t('business.researchBox01Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_2.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox02Title') }}</p>
              <p class="text">{{ t('business.researchBox02Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_3.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox03Title') }}</p>
              <p class="text">{{ t('business.researchBox03Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_4.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.researchBox04Title') }}</p>
              <p class="text">{{ t('business.researchBox04Text') }}</p>
            </div>
          </li>
        </ul>
        <!-- //02 -->
        <!-- 03 -->
        <ul class="content box_animation" :class="{ active: actives.translation }">
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_1.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox01Title') }}</p>
              <p class="text">{{ t('business.translationBox01Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_2.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox02Title') }}</p>
              <p class="text">{{ t('business.translationBox02Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_3.png)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.translationBox03Title') }}</p>
              <p class="text">{{ t('business.translationBox03Text') }}</p>
            </div>
          </li>
        </ul>
        <!-- //03 -->
        <!-- 04 -->
        <ul class="content box_animation" :class="{ active: actives.platform }">
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_4_1.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.platformBox01Title') }}</p>
              <p class="text">{{ t('business.platformBox01Text') }}</p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_4_2.jpg)"></div>
            <div class="text_box">
              <p class="title">{{ t('business.platformBox02Title') }}</p>
              <p class="text">{{ t('business.platformBox02Text') }}</p>
            </div>
          </li>
        </ul>
        <!-- //04 -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const boxes = ref();
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

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
<style scoped></style>
