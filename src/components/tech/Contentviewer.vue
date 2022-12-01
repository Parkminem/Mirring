<template>
  <div class="content__viewer bg__gray">
    <div class="container">
      <h2 class="content__title">{{ t('tech.viewerTItle') }}</h2>
      <p class="content__subtitle" v-html="t('tech.viewerText')"></p>
      <div class="content__notice">
        <a style="color: white; font-family: NotoSans" href="http://222.239.218.187:5009">{{
          t('tech.translateBtn')
        }}</a>
      </div>
      <div class="viewer__images">
        <ul class="viewer__process">
          <li class="process process1 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span v-html="t('tech.viewerBox01')"></span>
            </div>
            <div class="peocess__number">1</div>
          </li>
          <li class="process process2 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span v-html="t('tech.viewerBox02')"></span>
            </div>
            <div class="peocess__number">2</div>
          </li>
          <li class="process process3 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span>{{ t('tech.viewerBox03') }}</span>
            </div>
            <div class="peocess__number">3</div>
          </li>
          <li class="process process4 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span v-html="t('tech.viewerBox04')"></span>
            </div>
            <div class="peocess__number">4</div>
          </li>
        </ul>
        <div class="viewer__image">
          <div class="horizon"></div>
          <p>{{ t('tech.viewerDesc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
