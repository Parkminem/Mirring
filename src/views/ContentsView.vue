<template>
  <SubTitle :title="title" :subTitle="subTitle" :text="text" :bg="bg" />
  <Suspense>
    <template #default>
      <ContentsList />
    </template>
    <template #fallback
      ><div class="loading"><img src="/assets/images/common/spinner.gif" alt="loading" /></div
    ></template>
  </Suspense>
</template>

<script setup>
import SubTitle from '../components/common/SubTitle.vue';
import ContentsList from '../components/contents/ContentsList.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const title = t('contents.mainTitle');
const subTitle = t('contents.subTitle');
const text = t('contents.mainText');
const bg = '/assets/images/contents/Contents.jpg';

//컨텐츠리스트 조회
</script>
<style lang="scss" scoped>
#main {
  min-height: calc(100vh - 102px - 243px);
}
.loading {
  width: 100vw;
  min-height: calc(100vh - 102px - 243px);
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1024px) {
  #main {
    min-height: calc(100vh - 95px - 241px);
  }
  .loading {
    min-height: calc(100vh - 95px - 241px);
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
