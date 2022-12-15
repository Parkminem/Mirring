<template>
  <!-- news -->
  <section id="about_news" class="section" data-name="about_news">
    <div class="container_1076">
      <p class="title">{{ t('about.news') }}</p>
      <p class="text">{{ t('about.newsText') }}</p>
      <div class="news_list_box">
        <div class="content news_content box_animation">
          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(111)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/111/thumbnail/202208051658270390.jpg)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.08.05</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(111)">2022 K-콘텐츠엑스포 in 싱가포르</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(111)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(110)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/110/thumbnail/202205061019000082.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(110)">2022 국제전자제품박람회 CES</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(110)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(109)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/109/thumbnail/202205061016010506.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(109)">
                2021 메타버스 허브 &amp; DCC 글로벌 데모데이
              </p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(109)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(108)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/108/thumbnail/202205061013540754.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(108)">틱톡, 아이디어콘서트 MOU체결</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(108)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(107)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/107/thumbnail/202205061010530051.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(107)">메타버스 허브 ‘툰트라’ 인터뷰 진행</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(107)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(106)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/106/thumbnail/202205061008420593.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(106)">2021 넥스트콘텐츠페어</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(106)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(105)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/105/thumbnail/202205061006550349.JPG)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(105)">2021 제주만화 · 웹툰피칭데이</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(105)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->

          <!-- item -->
          <div class="box" style="opacity: 1">
            <div class="effect_area" onclick="mvNewsDetail(104)">
              <div
                class="image_box"
                style="background-image: url(http://data.ideaconcert.com/news/104/thumbnail/202205061002070942.jpg)"
              ></div>
            </div>
            <div class="info">
              <p class="date">2022.05.06</p>
              <p class="title ellipsis_line_2" onclick="mvNewsDetail(104)">2021 경기국제웹툰페어</p>
              <div class="news_page_move">
                <span onclick="mvNewsDetail(104)">+ 더 보기</span>
              </div>
            </div>
          </div>
          <!-- //item -->
        </div>
        <!-- v-if로 컨텐츠 수가 8 개 미만일 때 숨겨주는 코드 작성해 주세용 -->
        <Pagenation :page="1" :total-page="12" :page-size="4" />
      </div>
    </div>
  </section>
  <!-- //news -->
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import Pagenation from '../common/Pagenation.vue';

const { t } = useI18n();
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
