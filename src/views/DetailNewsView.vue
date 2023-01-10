<template>
  <div id="main">
    <Banner />
    <Suspense>
      <template #default>
        <DetailBody :pk="pk" />
      </template>
      <template #fallback
        ><div class="loading"><img src="/assets/images/common/spinner.gif" alt="loading" /></div
      ></template>
    </Suspense>
  </div>
</template>
<script setup>
import DetailBody from '../components/detail/DetailBody.vue';
import Banner from '../components/detail/Banner.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pk = route.query.pk;
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
