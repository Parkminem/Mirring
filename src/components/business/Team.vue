<template>
  <section class="section" data-name="business_team">
    <div class="container_1096">
      <p class="title">{{ t('business.movieTitle') }}</p>
      <p class="text" v-html="t('business.movieText')"></p>
      <div class="content">
        <div class="right">
          <img class="team_pc_img" src="/assets/images/business/team_pc_img.png" alt="pc_img" title="pc_img" />
          <p class="text">
            <img class="arrow" src="/assets/images/business/arrow_up_gray.png" alt="arrow_up" />{{
              t('business.movieDesc')
            }}
          </p>
        </div>
        <ul class="left box_animation" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox01') }}</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox02') }}</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox03') }}</p>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round"></div>
            <p class="title">{{ t('business.movieBox04') }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const boxes = ref();

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
