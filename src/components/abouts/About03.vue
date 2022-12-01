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
        <!-- pagination -->
        <ul class="news_pagination">
          <li class="number active">1</li>

          <li class="number" onclick="mvNewsPage(2)">2</li>

          <li class="number" onclick="mvNewsPage(3)">3</li>

          <li class="number" onclick="mvNewsPage(4)">4</li>

          <li class="arrow next" onclick="mvNewsPage(5)">
            <img src="/assets/images/about/pagination_next.png" alt="arrow_next" />
          </li>
        </ul>
        <!-- //pagination -->
      </div>
    </div>
  </section>
  <!-- //news -->
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<style></style>
