<template>
  <div class="catroon__cut bg__gray">
    <div class="container">
      <h2 class="content__title">{{ t('tech.separateTitle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.separateText')"></p>
      <div class="cut__images">
        <div id="first__notice" class="content__notice">{{ t('tech.separateBtn') }}</div>
        <div class="cut__image"></div>
        <ul class="cut__process">
          <li class="process process1 shadow">
            <div class="process__image"></div>
            <div class="process__text">{{ t('tech.separateBox01') }}</div>
            <div class="peocess__number">1</div>
          </li>
          <li class="process process2 shadow">
            <div class="process__image"></div>
            <div class="process__text">{{ t('tech.separateBox02') }}</div>
            <div class="peocess__number">2</div>
          </li>
          <li class="process process3 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span v-html="t('tech.separateBox03')"></span>
            </div>
            <div class="peocess__number">3</div>
          </li>
          <li class="process process4 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span v-html="t('tech.separateBox04')"></span>
            </div>
            <div class="peocess__number">4</div>
          </li>
        </ul>
      </div>
      <!-- <a class = "button" href="#">링크로 바로가기 ></a> -->
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped lang="scss"></style>
