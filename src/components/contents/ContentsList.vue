<template>
  <div class="content_wrap">
    <div class="list_box_wrap">
      <ul>
        <li class="listbox" v-for="(item, idx) in items" :key="item.title">
          <div class="img_wrap">
            <img src="/assets/images/contents/img01.jpg" />
          </div>
          <dl>
            <dt>{{ item.title }}</dt>
            <dd>
              {{ item.desc }}
            </dd>
          </dl>
          <ul class="btn_wrap">
            <li>
              <!-- 작품소개서 href에 링크 삽입 -->
              <a target="blank" href="">작품소개서</a>
            </li>
            <li>
              <a target="blank" href="">Introduction</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
@import '../../style/contents.css';
</style>
