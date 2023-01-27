<template>
  <div class="content_wrap" id="main">
    <div class="list_box_wrap">
      <ul>
        <li class="listbox" v-for="content in contentsList" :key="content.title">
          <div class="img_wrap">
            <img :src="`http://data.ideaconcert.com${content.thumbnail_file_url}`" />
          </div>
          <dl>
            <dt v-if="locale === 'kr'">{{ content.title_kr }}</dt>
            <dt v-if="locale === 'en'">{{ content.title_us }}</dt>
            <dt v-if="locale === 'id'">{{ content.title_id }}</dt>
            <dt v-if="locale === 'pt'">{{ content.title_pt }}</dt>
            <dd v-if="locale === 'kr'">
              {{ content.content_kr }}
            </dd>
            <dd v-if="locale === 'en'">
              {{ content.content_us }}
            </dd>
            <dd v-if="locale === 'id'">
              {{ content.content_id }}
            </dd>
            <dd v-if="locale === 'pt'">
              {{ content.content_pt }}
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <a target="blank" :href="`http://data.ideaconcert.com${content.file_url_kr}`">작품소개서</a>
            </li>
            <li>
              <a target="blank" :href="`http://data.ideaconcert.com${content.file_url_us}`">Introduction</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <Pagination :page="1" :pageSize="5" :totalPage="2" /> -->
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Pagination from '../common/Pagination.vue';
import contentsApi from '../../api/contents';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const contentsList = ref();
//콘텐츠 리스트 조회
await contentsApi
  .getContents(locale.value)
  .then((res) => {
    console.log(res);
    contentsList.value = res.data.data;
  })
  .catch((err) => console.log(err));
</script>
<style>
@import '../../style/contents.css';
</style>
