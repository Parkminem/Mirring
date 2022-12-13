<template>
  <section class="section" data-name="contact_address">
    <div class="container_1076">
      <p class="title">{{ t('contact.mapTitle') }}</p>
      <p class="sub_title">{{ t('contact.mapDesc') }}</p>
      <div class="content">
        <div class="address_box">
          <div class="kakao_map" id="map01"></div>
          <p class="title">판교 본사</p>
          <p class="text address">경기 성남시 수정구 대왕판교로 815</p>
          <p class="text address">판교기업지원허브 ICT문화융합센터 430호</p>
          <ul class="info">
            <li class="tel">
              <span>P 070-8825-5004</span>
            </li>
            <li class="mail">
              <span>F 031-5182-9048</span>
            </li>
          </ul>
        </div>
        <div class="address_box">
          <div class="kakao_map" id="map02"></div>
          <p class="title">AI연구센터</p>
          <p class="text address">서울 서초구 매헌로8길 47</p>
          <p class="text address">407호</p>
          <ul class="info">
            <li class="tel">
              <span>P 070-8825-5004</span>
            </li>
            <li class="mail">
              <span>F 031-5182-9048</span>
            </li>
          </ul>
        </div>
        <div class="address_box">
          <div class="kakao_map" id="map03"></div>
          <p class="title">제주 지사 플레이콘</p>
          <p class="text address">제주특별자치도 제주시 중앙로 217</p>
          <p class="text address">제주벤처마루 701호</p>
          <ul class="info">
            <li class="tel">
              <span>P 070-8825-5004</span>
            </li>
            <li class="mail">
              <span>F 031-5182-9048</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
//지도 부분 다 data로 교체해야함!!!!!!!!!!!
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
onMounted(() => {
  const script = document.createElement('script');

  /* global kakao */
  script.onload = () => kakao.maps.load(initMap);

  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=${
    import.meta.env.VITE_APP_KEY
  }`;
  document.head.appendChild(script);

  const initMap = () => {
    const container01 = document.getElementById('map01');
    const container02 = document.getElementById('map02');
    const container03 = document.getElementById('map03');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    let map01 = new kakao.maps.Map(container01, options);
    let map02 = new kakao.maps.Map(container02, options);
    let map03 = new kakao.maps.Map(container03, options);
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('경기 성남시 수정구 대왕판교로 815', function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map01,
          position: coords
        });
        map01.setCenter(coords);
      }
    });
    geocoder.addressSearch('서울 서초구 매헌로8길 47', function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map02,
          position: coords
        });
        map02.setCenter(coords);
      }
    });
    geocoder.addressSearch('제주특별자치도 제주시 중앙로 217', function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
          map: map03,
          position: coords
        });
        map03.setCenter(coords);
      }
    });
  };
});
</script>
<style scoped lang="scss">
.section {
  width: 100%;
  padding: 442px 0 140px 0;
  .container_1076 {
    p {
      font-family: 'Noto Sans', sans-serif;
      color: #292929;
      text-align: center;
      &.title {
        font-weight: bold;
        font-size: 22px;
        line-height: 1.36;
        margin-bottom: 10px;
      }
      &.sub_title {
        font-size: 16px;
        line-height: 1.75;
        margin-bottom: 60px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .address_box {
        width: 33%;
        max-width: 315px;
        box-sizing: border-box;
        margin-right: 66px;
        &:last-child {
          margin-right: 0;
        }
        .kakao_map {
          width: 315px;
          height: 252px;
          color: #333;
          position: relative;
          font-family: 'Noto Sans', sans-serif;
          margin-bottom: 30px;
          .root_daum_roughmap .wrap_controllers {
            display: none;
          }
        }
        .title {
          font-weight: bold;
          font-size: 16px;
          line-height: 1.38;
          color: #292929;
        }
        .text {
          font-size: 14px;
          line-height: 1.64;
          color: #5a5a5a;
          text-align: center;
          width: 100%;
        }
        .info {
          font-size: 14px;
          line-height: 1.64;
          display: flex;
          justify-content: center;
          position: relative;
          color: #5a5a5a;
          &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 1px;
            height: 70%;
            background-color: #5a5a5a;
          }
          .tel {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section {
    padding: 50px 0 80px 0 !important;
    .container_1076 {
      p {
        &.title {
          font-size: 12px;
          margin-bottom: 10px;
        }
        &.sub_title {
          font-size: 12px;
          margin: 0;
        }
      }
      .content {
        flex-direction: column;
        align-items: center;
        .address_box {
          margin-top: 35px;
          margin-right: 0;
          width: 100%;
          .kakao_map {
            margin-bottom: 20px;
          }
          .title {
            font-size: 12px;
          }
          .text {
            font-size: 12px;
          }
          .info {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
