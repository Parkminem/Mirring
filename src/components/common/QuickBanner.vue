<template>
  <section class="section" data-name="quick_banner">
    <div class="bg">
      <div
        :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
        @mouseenter="actives.contactActive = true"
        @mouseleave="actives.contactActive = false"
      ></div>
      <div
        :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
        @mouseenter="actives.careersActive = true"
        @mouseleave="actives.careersActive = false"
      ></div>
    </div>
    <div class="container_1548">
      <div class="content">
        <div
          :class="[actives.contactActive ? ['contact hover', 'active'] : 'contact hover']"
          @mouseenter="actives.contactActive = true"
          @mouseleave="actives.contactActive = false"
        >
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_contact.png"
            alt="character_contact"
          />
          <div class="box">
            <p class="sub_title" v-html="t('common.banner.leftSubTitle')"></p>
            <p class="title">{{ t('common.banner.leftTitle') }}</p>
            <a class="quick_move" href="/contact">{{ t('common.button.contactLink') }}</a>
          </div>
        </div>
        <div
          :class="[actives.careersActive ? ['careers hover', 'active'] : 'careers hover']"
          @mouseenter="actives.careersActive = true"
          @mouseleave="actives.careersActive = false"
        >
          <div class="box">
            <p class="sub_title">{{ t('common.banner.rightSubTitle') }}</p>
            <p class="title" v-html="t('common.banner.rightTitle')"></p>
            <a class="quick_move" href="/careers">{{ t('common.button.careersLink') }}</a>
          </div>
          <img
            class="character"
            src="/assets/images/common/quick_banner/character_careers.png"
            alt="character_careers"
            title="character_careers"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const actives = ref({
  contactActive: false,
  careersActive: false
});
</script>
<style scoped lang="scss">
.section {
  width: 100%;
  padding: 55px 0 50px 0;
  position: relative;
  height: 268px;
  box-sizing: border-box;
  background: #f9f9f9;
  font-family: 'Noto Sans', sans-serif;
  .bg {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    .contact,
    .careers {
      width: 50%;
      height: 100%;
      transition: 0.5s all;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .contact {
      background-image: url(/assets/images/common/quick_banner/contact.png);
      background-position: right;
      &.active {
        background-image: url(/assets/images/common/quick_banner/contact_over.png);
      }
    }
    .careers {
      background-image: url(/assets/images/common/quick_banner/careers.png);
      background-position: left;
      &.active {
        background-image: url(/assets/images/common/quick_banner/careers_over.png);
      }
    }
  }
  .container_1548 {
    .content {
      display: flex;
      position: relative;
      z-index: 1;
      > div {
        display: flex;
        width: 50%;
        &.careers {
          text-align: right;
          .character {
            width: 187px;
            height: 150px;
            margin-left: 62px;
          }
          .box {
            margin-left: auto;
            .quick_move {
              margin-left: auto;
            }
          }
        }
        &.contact .character {
          width: 161px;
          height: 148px;
          margin-right: 62px;
        }
        .box {
          .sub_title {
            font-size: 16px;
            line-height: 1.38;
            color: #292929;
            margin-bottom: 8px;
          }
          .title {
            font-weight: bold;
            font-size: 22px;
            line-height: 1.36;
            color: #292929;
            margin-bottom: 37px;
          }
          .quick_move {
            font-weight: bold;
            font-size: 18px;
            line-height: 1.33;
            width: 155px;
            height: 46px;
            border-radius: 28px;
            background-color: #ec6c00;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1548 .content > div .character {
    display: none;
  }
}
@media (max-width: 1024px) {
  .section {
    background-color: #eee;
    height: auto;
    padding: 0;
    .bg {
      display: none;
    }
    .container_1548 {
      width: 100%;
      .content {
        display: block;
        > div {
          width: 100%;
          .character {
            display: none;
          }
          &.contact {
            .box {
              background-image: url(/assets/images/common/quick_banner/contact_mobile.png);
              background-position: left;
            }
          }
          &.careers {
            display: block;
            overflow: hidden;
            .box {
              margin-left: 0;
              background-image: url(/assets/images/common/quick_banner/careers_mobile.png);
              background-position: right;
            }
          }
          .box {
            width: 100%;
            text-align: center;
            padding: 25px 0 34px 0;

            background-repeat: no-repeat;
            background-size: cover;
            .sub_title {
              font-size: 12px;
              margin-bottom: 5px;
            }
            .title {
              font-size: 15px;
              margin-bottom: 28px;
            }
            .quick_move {
              width: 148px;
              margin: 0 auto;
              display: block;
              line-height: 46px;
            }
          }
        }
      }
    }
  }
}
</style>
