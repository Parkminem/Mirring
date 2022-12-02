<template>
  <section class="section" data-name="business_cost">
    <div class="container_1076">
      <p class="title" v-html="t('business.costTitle')"></p>
      <p class="text" v-html="t('business.costText')"></p>
      <div class="content">
        <div class="white_box_head">
          <ul class="arrow_box box_animation">
            <li style="opacity: 1">
              <p class="regular_text">{{ t('business.source') }}</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
            <li style="opacity: 1">
              <p class="regular_text">{{ t('business.video') }}</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
          </ul>
          <ul :class="['bold_text_box', 'box_animation', lang]">
            <li style="opacity: 1">{{ t('business.creator') }}</li>
            <li style="opacity: 1">{{ t('business.tool') }}</li>
            <li style="opacity: 1">{{ t('business.platforms') }}</li>
          </ul>
        </div>
        <ul class="white_box_list box_animation">
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_1.png" alt="cost_1" title="cost_1" />
            <p class="text" v-html="t('business.creatorBox')"></p>
          </li>
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_2.png" alt="cost_2" title="cost_2" />
          </li>
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_3.png" alt="cost_3" title="cost_3" />
            <p class="text" v-html="t('business.platformBox')"></p>
          </li>
        </ul>
        <div class="white_box_foot">
          <ul :class="['bold_text_box', 'box_animation', lang]">
            <li style="opacity: 1">{{ t('business.ip') }}</li>
            <li style="opacity: 1">{{ t('business.makingMovie') }}</li>
            <li style="opacity: 1">{{ t('business.sellingMovie') }}</li>
          </ul>
          <ul class="arrow_box box_animation">
            <li style="opacity: 1">
              <img src="/assets/images/business/cost_arrow_3.png" alt="arrow" title="arrow" />
              <p class="regular_text">{{ t('business.share') }}</p>
            </li>
            <li style="opacity: 1">
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
import { ref, onMounted, watch } from 'vue';
import scrollEvent from '../../util/scrollEvent';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
const { t } = useI18n();
const lang = i18n.global.locale;

const boxes = ref();

watch(lang, (newLang) => {
  lang = newLang;
});

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
