<template>
  <section class="section" data-name="business_cost">
    <div class="container_1076">
      <p class="title">초기 제작비용 부담없이<br />2차 저작 컨텐츠를 확보하세요!</p>
      <p class="text">
        초기 제작비용은 전부 아이디어 콘서트가 부담합니다.<br />
        제작 이후 수익이 발생한 시점에서부터 수익을 쉐어합니다.
      </p>
      <div class="content">
        <div class="white_box_head">
          <ul class="arrow_box box_animation">
            <li style="opacity: 1">
              <p class="regular_text">원천 콘텐츠 제공</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
            <li style="opacity: 1">
              <p class="regular_text">영상 콘텐츠 제공</p>
              <img src="/assets/images/business/cost_arrow_2.png" alt="arrow" title="arrow" />
            </li>
          </ul>
          <ul class="bold_text_box box_animation">
            <li style="opacity: 1">창작가</li>
            <li style="opacity: 1">저작툴 (영상제작)</li>
            <li style="opacity: 1">플랫폼</li>
          </ul>
        </div>
        <ul class="white_box_list box_animation">
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_1.png" alt="cost_1" title="cost_1" />
            <p class="text">웹툰 작가<br />단행본 만화 작가<br />그림동화 작가<br />학습만화 작가</p>
          </li>
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_2.png" alt="cost_2" title="cost_2" />
          </li>
          <li class="box" style="opacity: 1">
            <img class="images" src="/assets/images/business/cost_3.png" alt="cost_3" title="cost_3" />
            <p class="text">IP TV<br />스트리밍<br />VOD 서비스</p>
          </li>
        </ul>
        <div class="white_box_foot">
          <ul class="bold_text_box box_animation">
            <li style="opacity: 1">IP 원본 제공</li>
            <li style="opacity: 1">웹툰무비 제작</li>
            <li style="opacity: 1">웹툰무비 판매</li>
          </ul>
          <ul class="arrow_box box_animation">
            <li style="opacity: 1">
              <img src="/assets/images/business/cost_arrow_3.png" alt="arrow" title="arrow" />
              <p class="regular_text">수익쉐어</p>
            </li>
            <li style="opacity: 1">
              <img src="/assets/images/business/cost_arrow_3.png" alt="arrow" title="arrow" />
              <p class="regular_text">수익쉐어</p>
            </li>
          </ul>
        </div>
      </div>
      <p class="cost_text">판매비 - 제작비 = 수익</p>
      <p class="cost_text_small">제작비를 공제 후에 수익배분 (배분비율은 별도 협의)</p>
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
