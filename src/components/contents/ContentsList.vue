<template>
  <div class="content_wrap">
    <div class="list_box_wrap">
      <ul>
        <li class="listbox" v-for="content in contentsList" :key="content.title">
          <div class="img_wrap">
            <img :src="'http://data.ideaconcert.com' + content.thumbnail_file_url" />
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
              <a target="blank" :href="`https://data.ideaconcert.com${content.file_url_kr}`">작품소개서</a>
            </li>
            <li>
              <a target="blank" :href="`https://data.ideaconcert.com${content.file_url_us}`">Introduction</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Pagination
      :page="nowPage"
      :pageSize="5"
      :totalPage="totalPage"
      @goPrePage="(page) => movePrePage(page)"
      @goPage="(page) => movePage(page)"
      @goNextPage="(page) => moveNextPage(page)"
      v-if="totalPage > 1"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Pagination from '@/components/common/Pagination.vue';
import contentsApi from '@/api/contents';
import { useI18n } from 'vue-i18n';
import router from '@/routes';

const { locale } = useI18n();

const contentsList = ref();
const totalPage = ref();
const nowPage = ref(1);

//콘텐츠 리스트 조회
await contentsApi
  .getContents(locale.value, 1)
  .then((res) => {
    contentsList.value = res.data.data.contentsData;
    totalPage.value = res.data.data.totalPageNum;
  })
  .catch((err) => router.replace('/notfound'));

//페이지 이동
function movePage(page) {
  contentsApi
    .getContents(locale.value, page)
    .then((res) => {
      contentsList.value = res.data.data.contentsData;
      totalPage.value = res.data.data.totalPageNum;
      nowPage.value = page;
    })
    .catch((err) => router.replace('/notfound'));
}

//페이지 이전 버튼 클릭
function movePrePage(page) {
  contentsApi
    .getContents(locale.value, page)
    .then((res) => {
      contentsList.value = res.data.data.contentsData;
      totalPage.value = res.data.data.totalPageNum;
      nowPage.value = page;
    })
    .catch((err) => router.replace('/notfound'));
}

//페이지 다음 버튼 클릭
function moveNextPage(page) {
  contentsApi
    .getContents(locale.value, page)
    .then((res) => {
      contentsApi.value = res.data.data.contentsData;
      totalPage.value = res.data.data.totalPageNum;
      nowPage.value = page;
    })
    .catch((err) => router.replace('/notfound'));
}
</script>
<style>
@import '../../assets/style/contents.css';
</style>
