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
            <a class="page_move" href="/assets/data/careers/아이디어 콘서트_입사지원서.zip" download="">{{
              t('common.button.downLoad')
            }}</a>
          </ul>
        </div>
        <div class="right_box box_animation" ref="boxes">
          <div class="white_box">
            <div class="round"></div>
            <p class="title">{{ t('careers.applyBox01Title') }}</p>
            <p class="text">{{ t('careers.applyBox01Text') }}</p>
          </div>
          <div class="white_box">
            <div class="round"></div>
            <p class="title">{{ t('careers.applyBox02Title') }}</p>
            <p class="text">{{ t('careers.applyBox02Text') }}</p>
          </div>
          <div class="white_box">
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
          <a class="page_move" href="/assets/data/careers/아이디어 콘서트_입사지원서.zip" download="">{{
            t('common.button.downLoad')
          }}</a>
        </div>
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

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
<style scoped>
@import '../../style/careers.css';
</style>
