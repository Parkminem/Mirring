<template>
  <section class="banner" data-name="about_detail_banner">
    <p class="title">{{ t('detail.title') }}</p>
    <p class="text">{{ t('detail.text') }}</p>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.banner {
  padding: 58px 0 56px 0;
  text-align: center;
  background-image: url(/assets/images/common/newsBanner.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .title {
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
    font-size: 22px;
    line-height: 1.36;
    color: #292929;
  }
  .text {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    line-height: 1.38;
    color: #292929;
    margin-top: 10px;
  }
}
@media (max-width: 1024px) {
  .banner {
    background-position: left;
    padding: 38px 0;
    .title {
      font-size: 12px;
    }
    .text {
      font-size: 12px;
    }
  }
}
</style>
