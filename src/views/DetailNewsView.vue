<template>
  <div id="main">
    <Banner />
    <DetailBody :pk="pk" :detailNews="detailNews" v-if="detailNews" />
  </div>
</template>
<script setup>
import DetailBody from '../components/detail/DetailBody.vue';
import Banner from '../components/detail/Banner.vue';
import { useAboutStore } from '../store/about';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const { locale } = useI18n();
const aboutStore = useAboutStore();
const { detailNews } = storeToRefs(aboutStore);
const route = useRoute();
const pk = route.query.pk;
//상세 뉴스 불러오기
aboutStore.detailNewsAct(locale.value, pk);
</script>
<style lang="scss" scoped>
#main {
  min-height: calc(100vh - 102px - 243px);
}
@media (max-width: 1024px) {
  #main {
    min-height: calc(100vh - 95px - 241px);
  }
}
</style>
