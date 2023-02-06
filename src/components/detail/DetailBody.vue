<template>
  <section class="section" data-name="about_detail_news">
    <div class="container_1076">
      <div class="notice_head">
        <div class="title" v-if="locale === 'kr'">{{ detailNews.title_kr }}</div>
        <div class="title" v-if="locale === 'en'">{{ detailNews.title_us }}</div>
        <div class="title" v-if="locale === 'pt'">{{ detailNews.title_pt }}</div>
        <div class="title" v-if="locale === 'id'">{{ detailNews.title_id }}</div>
        <div class="date">{{ changeDate(detailNews.regdate) }}</div>
      </div>
      <div class="notice_body" v-html="detailNews.content_kr" v-if="locale === 'kr'"></div>
      <div class="notice_body" v-html="detailNews.content_us" v-if="locale === 'en'"></div>
      <div class="notice_body" v-html="detailNews.content_pt" v-if="locale === 'pt'"></div>
      <div class="notice_body" v-html="detailNews.content_id" v-if="locale === 'id'"></div>
    </div>
    <ul class="notice_foot">
      <li class="prev" v-if="detailNews.prev_pk" @click="goPage(detailNews.prev_pk)">&lt; {{ t('detail.prev') }}</li>
      <li class="back" @click="goNews">
        <a href="/about#about_news">{{ t('detail.list') }}</a>
      </li>
      <li class="next" v-if="detailNews.next_pk" @click="goPage(detailNews.next_pk)">{{ t('detail.next') }} &gt;</li>
    </ul>
  </section>
</template>
<script setup>
import { changeDate } from '@/utils/util';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import aboutApi from '@/api/about';
const router = useRouter();
const { t, locale } = useI18n();

const props = defineProps({
  pk: String
});

const detailNews = ref();

//상세 뉴스 불러오기
await aboutApi
  .getDetailNews(locale.value, props.pk)
  .then((res) => {
    detailNews.value = res.data.data;
  })
  .catch((err) => router.replace('/notfound'));

//목록 클릭 시 뉴스 컴포넌트로 이동
function goNews() {
  router.push({
    name: 'about',
    hash: '#about_news'
  });
}
//글 이동
const goPage = (num) => {
  window.location.href = `/detail?pk=${num}`;
};
</script>
<style lang="scss" scoped>
.section {
  padding: 106px 0 136px 0;
  .notice_head {
    display: flex;
    margin-bottom: 26.5px;
    .title {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      font-size: 20px;
      line-height: 1.35;
      color: #292929;
    }
    .date {
      font-family: 'Noto Sans', sans-serif;
      font-size: 16px;
      line-height: 1.38;
      color: #969696;
      margin-left: auto;
    }
  }
  .notice_body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    line-height: 1.38;
    color: #292929;
    padding: 32.5px 0 72.5px 0;
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    text-align: center;
    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h3 {
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h4 {
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h5 {
      display: block;
      font-size: 0.83em;
      margin-block-start: 1.67em;
      margin-block-end: 1.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h6 {
      display: block;
      font-size: 0.67em;
      margin-block-start: 2.33em;
      margin-block-end: 2.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    hr {
      display: block;
      unicode-bidi: isolate;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      margin-inline-start: auto;
      margin-inline-end: auto;
      overflow: hidden;
      border-style: inset;
      border-width: 1px;
    }
    strong {
      font-weight: bold;
    }
    img {
      margin: 0 auto;
    }
  }
  .notice_foot {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 53.5px;
    li {
      cursor: pointer;
      font-family: 'Noto Sans', sans-serif;
      font-size: 14px;
      line-height: 1.64;
      color: #292929;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      &::nth-child(2) {
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
      }
    }
    .prev {
      position: absolute;
      left: 40%;
    }
    .back {
      position: absolute;
    }
    .next {
      position: absolute;
      left: 60%;
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 46px 0 57px 0;
    .notice_head {
      margin-bottom: 10px;
      overflow: hidden;
      .title {
        font-size: 12px;
        float: left;
      }
      .date {
        font-size: 12px;
        float: right;
      }
    }
    .notice_foot {
      .prev {
        left: 20%;
      }
      .next {
        left: 80%;
      }
    }
    .notice_body img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
