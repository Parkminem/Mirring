<template>
  <section class="section" data-name="business_sales">
    <div class="container_1076">
      <p class="title">
        작가님들의 웹툰/출판만화 작품을<br />
        새로운 기술, 새로운 포맷으로 제작하여<br />
        더 넓은 세상과 만납니다.
      </p>
      <p class="text">
        아이디어 콘서트의 문화기술을 통해 새로운 콘텐츠로 재탄생시킵니다.<br />
        만화책과 웹툰을 더 재밌게 볼 수 있도록, 보지 못한 작품을 새로이 볼 수 있도록.<br />
        많은 작품과 여러분이 만나는 ‘즐거운 상상’은 계속됩니다.
      </p>
      <ul class="content box_animation" ref="boxes">
        <li class="box" style="opacity: 1">
          <p class="number">01</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">성인세대 공략</p>
            <p class="text">
              출판만화를 보고 자란 성인세대 타겟의 이목을 끌 수 있습니다. 기존의 작품을 새로운 포맷으로 재밌게 즐길 수
              있는 만화무비 콘텐츠로 다양한 세대와 소통하길 기대합니다.
            </p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">02</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">신세대 공략</p>
            <p class="text">
              영상화된 콘텐츠를 통해 새로운 플랫폼에서 작품을 연재할 수 있습니다. 직관적이고 생동감 있는 웹툰무비를 통해
              새로운 독자층을 확보할 수 있습니다.
            </p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">03</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">해외판매</p>
            <p class="text">
              해외 유통을 통해 글로벌 작품 홍보가 가능합니다. 아이디어 콘서트의 현지화와 번역을 통해서 더 넓은 세계
              속에서 작품이 알려지기를 기대합니다.
            </p>
          </div>
        </li>
        <li class="box" style="opacity: 1">
          <p class="number">04</p>
          <div class="round"></div>
          <div class="text_box">
            <p class="title">가치 재조명</p>
            <p class="text">
              OSMU를 통한 작품의 새로운 가치를 창출합니다. 기존의 작품에생명을 불어넣은 만화무비, 웹툰무비를 통해 더
              많은 기회를 잡을 수 있습니다.
            </p>
          </div>
        </li>
      </ul>
      <div style="display: flex; align-items: center; justify-content: center">
        <a
          class="page_move"
          style="width: 248px; height: 46px; margin-top: 50px"
          href="http://ko.kwavewebtoon.com"
          target="_blank"
          >브로슈어 보기</a
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';

const boxes = ref();

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
