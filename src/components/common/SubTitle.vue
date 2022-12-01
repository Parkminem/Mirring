<template>
  <section
    :class="[path == '/contact' || path == '/careers' ? ['section', 'widePadding'] : 'section']"
    data-name="banner"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <div class="container_1076">
      <p class="title" v-html="title"></p>
      <p class="sub_title">{{ subTitle }}</p>
      <p class="text" v-html="text"></p>
    </div>
  </section>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const path = route.path;

defineProps({
  bg: String,
  title: String,
  subTitle: String,
  text: String
});
</script>
<style scoped>
.section[data-name='banner'] {
  width: 100%;
  padding: 64px 0 85px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 100px;
}
.section[data-name='banner'].widePadding {
  padding: 117px 0 70px 0;
}

.container_1076 {
  width: 1076px;
  margin: 0 auto;
}
.section[data-name='banner'] .title {
  font-family: 'GmarketSansBold';
  font-weight: bold;
  font-size: 37px;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 10px;
  white-space: pre-line;
}
.section[data-name='banner'] .sub_title {
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.65;
  color: #ff943a;
  margin-top: 46px;
  margin-bottom: 17px;
  white-space: pre-line;
}
.section[data-name='banner'] .text {
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 10px;
  white-space: pre-line;
}
.section[data-name='banner'] .text:last-child {
  margin-bottom: 0;
}
@media (max-width: 1280px) {
  .container_1076 {
    width: 95%;
  }
}
@media (max-width: 1024px) {
  .section[data-name='banner'] {
    padding: 72px 0;
  }
  .section[data-name='banner'] .title {
    font-size: 25px;
    margin: 0;
    margin-bottom: 17px;
  }
  .section[data-name='banner'] .sub_title {
    margin: 0;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .section[data-name='banner'] .text {
    font-size: 12px;
  }
}
</style>
