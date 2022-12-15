<template>
  <ul class="news_pagination">
    <li class="arrow prev" v-if="pagination(page, totalPage, pageSize).preBtn">
      <img src="/assets/images/common/pagination_prev.png" alt="arrow_prev" />
    </li>
    <li v-for="i of pagination(page, totalPage, pageSize).pageArr" :class="{ active: page == i }" class="number">
      {{ i }}
    </li>
    <li class="arrow next" v-if="pagination(page, totalPage, pageSize).nextBtn">
      <img src="/assets/images/common/pagination_next.png" alt="arrow_next" />
    </li>
  </ul>
</template>
<script setup>
import { pagination } from '../../utils/pagination';
import { defineProps } from 'vue';
const props = defineProps({
  page: Number,
  totalPage: Number,
  pageSize: Number
});
</script>
<style scoped lang="scss">
.news_pagination {
  display: flex;
  justify-content: center;
  margin-top: 63.5px;
  li {
    &.active {
      font-family: 'Noto Sans', sans-serif;
      font-weight: bold;
      color: #292929;
    }
    &.number {
      font-family: 'Noto Sans', sans-serif;
      font-size: 12px;
      line-height: 1.42;
      color: #969696;
      margin-right: 20px;
      cursor: pointer;
    }
    &.arrow {
      cursor: pointer;
      &.prev {
        margin-right: 38px;
      }
      &.next {
        margin-left: 18px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .news_pagination {
    margin-top: 20px;
    display: block;
    text-align: center;

    .number {
      display: inline;
    }
    .arrow {
      display: inline;
    }
  }
}
</style>
