<template>
  <section class="section" data-name="business_list">
    <div class="business_list_menu">
      <div class="container_1076">
        <ul class="content">
          <li class="menu" :class="{ active: actives.contents }" @click="onActive('contents')">콘텐츠 제작</li>
          <li class="menu" :class="{ active: actives.culture }" @click="onActive('culture')">문화기술 연구</li>
          <li class="menu" :class="{ active: actives.translation }" @click="onActive('translation')">현지화 및 번역</li>
          <li class="menu" :class="{ active: actives.platform }" @click="onActive('platform')">플랫폼 비즈니스</li>
        </ul>
      </div>
    </div>
    <div class="business_list_box">
      <div class="container_1076">
        <!-- 01 -->
        <ul class="content box_animation" :class="{ active: actives.contents }" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_1.png)"></div>
            <div class="text_box">
              <p class="title">웹툰 제작</p>
              <p class="text">
                재미와 감동을 선사하는 웹툰을 제작합니다. 사내 작가의 스토리 혹은 이미 연재를 통해 검증된 스토리를
                기반으로, “기획 &gt; 제작 &gt; 검수” 최적의 프로세스로 결과물을 도출합니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_2.png)"></div>
            <div class="text_box">
              <p class="title">웹툰무비 제작(웹툰 원작)</p>
              <p class="text">
                웹툰을 생생하게 살아 움직이는 화면 연출과 사운드로 즐길 수 있는 콘텐츠입니다. 어떤 웹툰도 더욱 재밌게
                감상할 수 있는 웹툰무비를 유통할 수 있는 글로벌 비즈니스 실행력을 갖추고 있습니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_3.png)"></div>
            <div class="text_box">
              <p class="title">만화책 웹툰화</p>
              <p class="text">
                출판되었던 만화 단행본을 세로 스크롤로 내용을 보는 웹툰의 형식으로 편집합니다. 새로운 포맷으로 더 많은
                작품이 독자들과 만날 수 기회를 제공합니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_1_4.png)"></div>
            <div class="text_box">
              <p class="title">만화무비 제작(만화책 원작)</p>
              <p class="text">
                출판 만화를 화면 연출과 사운드를 통해 만날 수 있도록 제작한 콘텐츠입니다. 웹과 모바일에서 한 장 한 장
                넘겨가면서 보던 만화책을, 더욱 즐겁게 만날 수 있도록 유저들에게 제공합니다.
              </p>
            </div>
          </li>
        </ul>
        <!-- //01 -->
        <!-- 02 -->
        <ul class="content box_animation" :class="{ active: actives.culture }" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_1.jpg)"></div>
            <div class="text_box">
              <p class="title">이미지 분리</p>
              <p class="text">
                업로드한 이미지를 빠른 시간 안에 분리하는 기술입니다. 이미지 위에 영역을 “사각형”, “자유형”으로 지정하여
                분리하고, 객체인지를 통해 자동으로 분리하는 기술입니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_2.jpg)"></div>
            <div class="text_box">
              <p class="title">자동 컷 분리</p>
              <p class="text">
                디지털화된 만화책 이미지를 업로드하면, 페이지에 있는 컷들이 3번째 화면에서 처럼 자동으로 분리됩니다.
                4번째 화면에서처럼 자동으로 타임라인에 나열이 되어 영상으로 만듭니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_3.jpg)"></div>
            <div class="text_box">
              <p class="title">자동채색</p>
              <p class="text">
                AI로 학습된 데이터를 기반으로 웹툰,만화의 스케치를 자동으로 채색하는 기술입니다. 왼쪽의 스케치 화면을
                채색하면 오른쪽과 같이 나옵니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_2_4.jpg)"></div>
            <div class="text_box">
              <p class="title">3D카메라</p>
              <p class="text">
                원본의 2D이미지에 입체감을 더해주는 기술입니다. 상하좌우 에서 이미지를 바라본 효과 뿐만이 아니라 사선
                방향으로 바라본 연출효과도 가능합니다.
              </p>
            </div>
          </li>
        </ul>
        <!-- //02 -->
        <!-- 03 -->
        <ul class="content box_animation" :class="{ active: actives.translation }" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_1.png)"></div>
            <div class="text_box">
              <p class="title">현지화 작업</p>
              <p class="text">
                작품의 결, 캐릭터, 스토리에 따라서 각 나라마다 잘 되는 콘텐츠가 다릅니다. 다년간의 전문적인 시장조사를
                통해서 현지화 작업을 거칩니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_2.png)"></div>
            <div class="text_box">
              <p class="title">작품 번역</p>
              <p class="text">
                인터넷 용어뿐 아니라 의성어 번역까지, 생생한 현지의 언어로 작품을 만나볼 수 있도록 전문적인 번역가와
                함께 일하고 있습니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="round" style="background-image: url(/assets/images/business/list_3_3.png)"></div>
            <div class="text_box">
              <p class="title">글로벌 서비스</p>
              <p class="text">
                세계 각국의 웹툰, OTT, VOD플랫폼 파트너사와 함께 하고 있습니다. 국내의 웹툰과 웹툰무비를 파트너사에
                공급합니다.
              </p>
            </div>
          </li>
        </ul>
        <!-- //03 -->
        <!-- 04 -->
        <ul class="content box_animation" :class="{ active: actives.platform }" ref="boxes">
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_4_1.jpg)"></div>
            <div class="text_box">
              <p class="title">참여 저작 플랫폼</p>
              <p class="text">
                웹툰을 웹툰무비로 더욱 잘 제작할 수 있는 저작툴을 연구합니다. 저작툴을 웹에서 사용자들이 사용할 수
                있도록 플랫폼을 개발하고 있습니다.
              </p>
            </div>
          </li>
          <li class="box" style="opacity: 1">
            <div class="images" style="background-image: url(/assets/images/business/list_4_2.jpg)"></div>
            <div class="text_box">
              <p class="title">웹,앱 플랫폼 개발</p>
              <p class="text">
                웹툰과 웹툰무비 감상에 최적화된 플랫폼을 통해 더욱 많은 작품들을 기다리고 있는 독자들에게 전달 될 수
                있도록 자체 플랫폼을 개발하고 있습니다.
              </p>
            </div>
          </li>
        </ul>
        <!-- //04 -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import scrollEvent from '../../util/scrollEvent';

const boxes = ref();
const actives = ref({
  contents: true,
  culture: false,
  translation: false,
  platform: false
});

const onActive = (active) => {
  for (let active in actives.value) {
    if (actives.value[active] === true) {
      actives.value[active] = false;
    }
  }
  actives.value[active] = !actives.value[active];
};

onMounted(() => {
  const boxesVal = boxes.value;
  scrollEvent.settingBoxAnimation(boxesVal);
});
</script>
<style scoped></style>
