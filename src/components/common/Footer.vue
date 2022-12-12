<template>
  <footer id="footer">
    <div class="container_1076">
      <p class="company">{{ t('common.footer.company') }}</p>
      <p class="address">{{ t('common.footer.pangyo') }}</p>
      <p class="address">{{ t('common.footer.yangjea') }}</p>
      <p class="address">{{ t('common.footer.jeju') }}</p>
      <ul class="contact_info">
        <li class="tel"><b>Tel</b><span class="country_number">070-8825-5004</span></li>
        <li class="mail"><b>e-Mail</b><span>info@ideaconcert.com</span></li>
      </ul>
      <p class="copyright"><span onclick="location.href='/admin'"></span>{{ t('common.footer.copyright') }}</p>
      <div class="family_site">
        <div class="trick_box">
          <ul class="link_box">
            <li>
              <a href="https://www.youtube.com/channel/UChWHJjTGDc4314owWJ7KGCw" target="_blank">Youtube</a>
            </li>
          </ul>
          <div class="hover_box">
            <span>Family sites</span>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
@import '../../style/footer.css';
</style>
