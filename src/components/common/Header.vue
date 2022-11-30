<template>
  <header id="header" :class="{ active: scrollActive }">
    <div class="container_1539">
      <ul class="content pc">
        <li class="logo">
          <router-link to="/">
            <img src="assets/images/common/logo.png" alt="logo" title="logo" />
          </router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/">{{ t('common.header.home') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/tech">{{ t('common.header.tech') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/about">{{ t('common.header.about') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/business">{{ t('common.header.business') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/contents">{{ t('common.header.contents') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/contact">{{ t('common.header.contact') }}</router-link>
        </li>
        <li class="quick_menu">
          <router-link to="/careers">{{ t('common.header.careers') }}</router-link>
        </li>

        <li class="language_change">
          <ul
            class="animation_language_change"
            :class="{ active: isActive }"
            @click="settingHeaderChangeLanguage"
            @mouseleave="isActive = false"
          >
            <li :class="{ active: changeActives.kr }" @click="changeLanguage('kr')">KR</li>
            <li :class="{ active: changeActives.us }" @click="changeLanguage('us')">EN</li>
            <li :class="{ active: changeActives.id }" @click="changeLanguage('id')">ID</li>
            <li :class="{ active: changeActives.pt }" @click="changeLanguage('pt')">PT</li>
          </ul>
        </li>
      </ul>
      <!-- mobile -->
      <div class="mobile">
        <ul class="content">
          <li class="logo">
            <a href="/"><img src="assets/images/common/logo.png" alt="logo" title="logo" /></a>
          </li>
          <li class="menu_img" @click="headerMobileMenuActive">
            <img src="assets/images/common/menu.png" alt="menu" title="menu" />
          </li>
        </ul>
        <ul class="menu">
          <li class="quick_menu">
            <router-link to="/">Home</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/tech">Our Tech</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/business">Business</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/contents">Contents</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="quick_menu">
            <router-link to="/careers">Careers</router-link>
          </li>

          <li class="language_change">
            <ul
              class="animation_language_change"
              :class="{ active: isActive }"
              @click="settingHeaderChangeLanguage"
              @mouseleave="isActive = false"
            >
              <li :class="{ active: changeActives.kr }" @click="changeLanguage('kr')">KR</li>
              <li :class="{ active: changeActives.us }" @click="changeLanguage('us')">EN</li>
              <li :class="{ active: changeActives.id }" @click="changeLanguage('id')">ID</li>
              <li :class="{ active: changeActives.pt }" @click="changeLanguage('pt')">PT</li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- // mobile -->
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import $ from 'jquery';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// changeLanguage에서 Active를 반영하기 위한 상태들
const isActive = ref(false);
const changeActives = ref({
  kr: true,
  us: false,
  id: false,
  pt: false
});
const scrollActive = ref(false);

onMounted(() => {
  document.addEventListener('wheel', (e) => {
    const scrollDirection = e.deltaY;
    if (scrollDirection > 0) {
      scrollActive.value = true;
    } else {
      scrollActive.value = false;
    }
  });
});
// 언어를 선택하는 함수
const changeLanguage = (language) => {
  for (let active in changeActives.value) {
    if (changeActives.value[active] === true) {
      changeActives.value[active] = false;
    }
  }
  changeActives.value[language] = !changeActives.value[language];
};

// 언어 토글(클릭하면 열리고 마우스가 벗어나면 사라지는 기능)
const settingHeaderChangeLanguage = () => {
  isActive.value = !isActive.value;
};

// 모바일 슬라이드 메뉴
const headerMobileMenuActive = () => {
  $('.mobile .menu').slideToggle();
};
</script>

<style scoped>
@import '../../style/header.css';
</style>
