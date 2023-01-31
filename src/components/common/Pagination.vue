<template>
  <ul class="news_pagination">
    <li class="arrow prev" v-if="pagination(page, totalPage, pageSize).preBtn">
      <button @click="$emit('goPrePage', pagination(page, totalPage, pageSize).startPage - 1)">
        <img @click="clickPrev" src="/assets/images/common/pagination_prev.png" alt="arrow_prev" />
      </button>
    </li>
    <li @click="clickPage" v-for="i of pagination(page, totalPage, pageSize).pageArr" class="number">
      <button @click="$emit('goPage', i)" :class="{ active: page == i }">{{ i }}</button>
    </li>
    <li class="arrow next" v-if="pagination(page, totalPage, pageSize).nextBtn">
      <button @click="$emit('goNextPage', pagination(page, totalPage, pageSize).endPage + 1)">
        <img @click="clickNext" src="/assets/images/common/pagination_next.png" alt="arrow_next" />
      </button>
    </li>
  </ul>
</template>
<script setup>
import { pagination } from '../../utils/pagination';

defineProps({
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
    &.number {
      font-family: 'Noto Sans', sans-serif;
      font-size: 12px;
      line-height: 1.42;
      color: #969696;
      margin-right: 20px;
      cursor: pointer;
      .active {
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
        color: #292929;
      }
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
