<template>
  <!-- <form id="aboutFormId">
    <input type="hidden" name="_csrf" value="14e8b693-5005-45a0-9f0f-8293485b3942" />
    <input type="hidden" name="news_pk" id="news_pk" value="" />
    <input type="hidden" name="curPage" id="curPage" value="" /> -->

  <!-- department -->
  <section class="section" data-name="about_department">
    <div class="container_1076">
      <p class="title" v-html="t('about.teams')"></p>
      <p class="text" v-html="t('about.teamsDesc')"></p>
      <div class="content box_animation">
        <div class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title" v-html="t('about.teamBox01Title')"></p>
          <p class="text" v-html="t('about.teamBox01Text')"></p>
        </div>
        <div class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title" v-html="t('about.teamBox02Title')"></p>
          <p class="text" v-html="t('about.teamBox02Text')"></p>
        </div>
        <div class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title" v-html="t('about.teamBox03Title')"></p>
          <p class="text" v-html="t('about.teamBox03Text')"></p>
        </div>
        <div class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title" v-html="t('about.teamBox04Title')"></p>
          <p class="text" v-html="t('about.teamBox04Text')"></p>
        </div>
        <div class="box" style="opacity: 1">
          <div class="round"></div>
          <p class="title" v-html="t('about.teamBox05Title')"></p>
          <p class="text" v-html="t('about.teamBox05Text')"></p>
        </div>
      </div>
    </div>
  </section>
  <!-- //department -->
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<style scoped></style>
