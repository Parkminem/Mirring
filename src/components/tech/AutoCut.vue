<template>
  <div class="catroon__cut bg__gray">
    <div class="container">
      <h2 class="content__title">{{ t('tech.separateTitle') }}</h2>
      <p class="content__subtitle">
        만화의 컷을 AI기술을 이용하여 자동으로 분리하고,<br />
        텍스트와 장면을 인지하여 다양한 연출효과를 주는 영상 제작기술입니다.
      </p>

      <div class="cut__images">
        <div id="first__notice" class="content__notice">100%자동화 고도화 중</div>
        <div class="cut__image"></div>
        <ul class="cut__process">
          <li class="process process1 shadow">
            <div class="process__image"></div>
            <div class="process__text">만화 스캔본 업로드</div>
            <div class="peocess__number">1</div>
          </li>
          <li class="process process2 shadow">
            <div class="process__image"></div>
            <div class="process__text">컷 분석을 통한 흐름설정</div>
            <div class="peocess__number">2</div>
          </li>
          <li class="process process3 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span>자동 컷 인지 및 추출<br />회사소개 영상 제작 </span>
            </div>
            <div class="peocess__number">3</div>
          </li>
          <li class="process process4 shadow">
            <div class="process__image"></div>
            <div class="process__text">
              <span
                >컷 분석을 통한 화면 연출, <br />
                장면전환 매칭 / 매칭 시간 설정
              </span>
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
<style scoped></style>
