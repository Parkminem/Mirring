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
          <ul :class="['bold_text_box', 'box_animation', lang]">
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
          <ul :class="['bold_text_box', 'box_animation', lang]">
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
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
const { t } = useI18n();
const lang = i18n.global.locale;

watch(lang, (newLang) => {
  lang = newLang;
});

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
  window.addEventListener('scroll', scrollEvent);
});
</script>
