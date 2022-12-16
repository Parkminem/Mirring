<template>
  <!-- partner -->
  <section class="section" data-name="about_partner">
    <div class="container_1076">
      <p class="title" v-html="t('about.partner')"></p>
      <p class="text" v-html="t('about.partnerText')"></p>
      <div class="content">
        <div class="box" v-for="i in partners" :style="{ backgroundImage: `url('${url}${i.logo}')` }">
          <div class="info_box">
            <p class="name">{{ i.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- //partner -->
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n';
import { useAboutStore } from '../../store/about';
const aboutStore = useAboutStore();
const { t } = useI18n();
const { partners } = storeToRefs(aboutStore);
const url = 'http://data.ideaconcert.com';
const locale = i18n.global.locale.value;

//파트너사 리스트 받아오기
aboutStore.partnerAct(locale);
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 100px 0 135px 0;

  .container_1076 {
    > p {
      font-family: 'Noto Sans', sans-serif;
      text-align: center;
      color: #292929;
      &.title {
        font-weight: bold;
        font-size: 22px;
        line-height: 1.36;
      }
      &.text {
        font-size: 16px;
        line-height: 1.75;
        margin-top: 10px;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 60px;
      .box {
        width: 248px;
        height: 117px;
        margin-right: 28px;
        position: relative;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        &:hover .info_box {
          opacity: 1;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
        &:nth-child(n + 5) {
          margin-top: 51px;
        }
        .info_box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background-color: rgba(65, 65, 65, 0.7);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .name {
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 1.38;
            color: #f9f9f9;
            text-align: center;
            width: 100%;
          }
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1076 .content .box {
    width: 33%;
    padding: 23px;
    box-sizing: border-box;
    margin-right: 0;
    &:nth-child(n + 5) {
      margin-top: 0;
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0;
    .container_1076 {
      > p {
        &.title {
          font-size: 12px;
          margin: 10px;
        }
        &.text {
          font-size: 12px;
          margin: 0;
        }
      }
      .content {
        margin-top: 35px;
        display: block;
        overflow: hidden;
        .box {
          float: left;
          margin-right: 0;
          width: 33%;
          padding: 23px;
          box-sizing: border-box;
          &:nth-child(n + 5) {
            margin: 0;
          }
          .info_box {
            .name {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
