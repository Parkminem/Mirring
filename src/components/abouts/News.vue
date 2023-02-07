<template>
  <!-- news -->
  <section id="about_news" class="section" data-name="about_news">
    <div class="container_1076">
      <p class="title">{{ t('about.news') }}</p>
      <p class="text">{{ t('about.newsText') }}</p>
      <div class="news_list_box">
        <div class="content news_content box_animation">
          <!-- item -->
          <div
            class="box"
            v-for="(news, idx) in aboutStore.newsList"
            :key="news.new_pk"
            ref="box"
            :class="[activeBox[idx + 1] ? `box0${idx + 1}` : '']"
          >
            <router-link :to="{ path: '/detail', query: { pk: news.news_pk } }">
              <div class="effect_area">
                <div class="image_box" :style="{ backgroundImage: `url('${url}${news.thumbnail_file_url}')` }"></div>
              </div>
              <div class="info">
                <p class="date">{{ changeDate(news.regdate) }}</p>
                <p class="title ellipsis_line_2" v-if="locale === 'kr'">
                  {{ news.title_kr }}
                </p>
                <p class="title ellipsis_line_2" v-if="locale === 'en'">
                  {{ news.title_us }}
                </p>
                <p class="title ellipsis_line_2" v-if="locale === 'id'">
                  {{ news.title_id }}
                </p>
                <p class="title ellipsis_line_2" v-if="locale === 'pt'">
                  {{ news.title_pt }}
                </p>
                <div class="news_page_move">
                  <span>+ 더 보기</span>
                </div>
              </div>
            </router-link>
          </div>
          <!-- //item -->
        </div>
        <!-- v-if로 컨텐츠 수가 8 개 미만일 때 숨겨주는 코드 작성해 주세용 -->
        <Pagination
          v-if="totalPage >= 2"
          :page="nowPage"
          :total-page="totalPage"
          :page-size="4"
          @goPrePage="(page) => movePrePage(page)"
          @goPage="(page) => movePage(page)"
          @goNextPage="(page) => moveNextPage(page)"
        />
      </div>
    </div>
  </section>
  <!-- //news -->
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Pagination from '@/components/common/Pagination.vue';
import { useAboutStore } from '@/store/about';
import { changeDate } from '@/utils/util';

const { t, locale } = useI18n();
const aboutStore = useAboutStore();
const url = 'https://data.ideaconcert.com';
const totalPage = aboutStore.totalPage;
const nowPage = ref(1);

// 뉴스리스트 불러오기
aboutStore.newsAct(locale.value, 1);

//페이지 이동
function movePage(page) {
  aboutStore.newsAct(locale.value, page);
  nowPage.value = page;
}

//페이지 이전 버튼 클릭
function movePrePage(page) {
  aboutStore.newsAct(locale.value, page);
  nowPage.value = page;
}

//페이지 다음 버튼 클릭
function moveNextPage(page) {
  aboutStore.newsAct(locale.value, page);
  nowPage.value = page;
}

//박스 애니메이션
const box = ref();
const activeBox = ref({});
for (let i = 1; i <= 8; i++) {
  activeBox.value[i] = false;
}
function scrollEvent() {
  let scrollH = scrollY + innerHeight;
  for (let i = 0; i < box.value.length; i++) {
    if (box.value[i].offsetTop + box.value[i].clientHeight < scrollH) activeBox.value[i + 1] = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
});
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 100px 0 100px 0;
  background-color: #f9f9f9;
  .container_1076 {
    > p {
      font-family: 'Noto Sans', sans-serif;
      color: #292929;
      text-align: center;
      &.title {
        font-weight: bold;
        font-size: 22px;
        line-height: 1.36;
      }
      &.text {
        margin-top: 10px;
        font-size: 16px;
        line-height: 1.75;
      }
    }
    .news_list_box {
      margin-top: 60px;
      .content {
        display: flex;
        flex-wrap: wrap;
        .box {
          opacity: 0;
          display: flex;
          flex-direction: column;
          width: 248px;
          min-height: 402.6px;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          margin-right: 28px;
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-child(n + 5) {
            margin-top: 56.5px;
          }
          .effect_area {
            overflow: hidden;
            cursor: pointer;
            &:hover .image_box {
              transform: scale(1.05);
            }
            .image_box {
              width: 248px;
              height: 248px;
              object-fit: contain;
              transition: all 1.3s cubic-bezier(0, 0, 0.05, 1);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            height: calc(100% - 248px);
            padding: 11px 15px 16.6px 15px;
            .date {
              font-family: 'Noto Sans', sans-serif;
              font-size: 12px;
              color: #969696;
              line-height: 1.42;
            }
            .title {
              font-family: 'Noto Sans', sans-serif;
              font-weight: bold;
              font-size: 16px;
              line-height: 1.38;
              color: #292929;
              text-align: left;
              margin-top: 6px;
              cursor: pointer;
            }
            .news_page_move {
              margin-top: auto;
              text-align: right;
              span {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .section .container_1076 .news_list_box .content .box {
    flex: 0 1 calc(25% - 14px);
    margin-right: 0;
    margin-right: 14px;
    .image_box {
      width: 100%;
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
          margin-bottom: 10px;
        }
        &.text {
          font-size: 12px;
          margin: 0;
        }
      }
      .news_list_box {
        margin-top: 35px;
        .content {
          display: block;
          overflow: hidden;
          .box {
            float: left;
            display: block;
            width: 49%;
            margin: 0;
            margin-top: 2%;
            min-height: 0;
            overflow: hidden;
            &:nth-child(even) {
              float: right;
            }
            &:nth-child(odd) {
              float: left;
            }
            &:nth-child(n + 5) {
              margin-top: 2%;
            }
            .effect_area {
              float: left;
              .image_box {
                width: 100px;
                height: 100px;
              }
            }
            .info {
              margin-left: 100px;
              .title {
                font-size: 12px;
                height: 16px;
                &.ellipsis_line_2 {
                  -webkit-line-clamp: 1;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .section .container_1076 .news_list_box .content .box {
    width: 100%;
  }
}
</style>
