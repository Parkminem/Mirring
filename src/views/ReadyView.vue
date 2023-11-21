<template>
  <div class="container">
    <span class="container_content">
      <img src="@/assets/images/home/character_about.png" width="300" />
      <br />
      <p class="title">홈페이지 오픈 준비중입니다.</p>
      <p class="content">더 나은 서비스를 제공해 드리기 위해 <br />최선을 다하겠습니다.</p>
      <p class="tel">070-8825-5004</p>
    </span>
  </div>
</template>
<style scoped>
.container {
  display: table;
  table-layout: fixed;
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.container_content {
  display: table-cell;
  vertical-align: middle;
}
.title {
  font-size: 34px;
  font-weight: 700;
  color: rgb(101, 93, 93);
  margin-bottom: 20px;
  margin-top: 30px;
}
.content {
  font-size: 20px;
  color: #9b9292;
  margin-bottom: 10px;
}
.tel {
  font-size: 14px;
  color: #000000;
}
</style>
