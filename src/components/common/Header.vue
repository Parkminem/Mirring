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
            <li
              :class="{ active: $i18n.locale == l }"
              v-for="l in languages"
              :key="l"
              style="text-transform: uppercase"
              @click="language = l"
            >
              {{ l }}
            </li>
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
        <Transition name="slideToggle">
          <ul class="menu" v-if="slide">
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
                <li
                  :class="{ active: $i18n.locale == l }"
                  v-for="l in languages"
                  :key="l"
                  style="text-transform: uppercase"
                  @click="language = l"
                >
                  {{ l }}
                </li>
              </ul>
            </li>
          </ul>
        </Transition>
      </div>
      <!-- // mobile -->
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { useI18n } from 'vue-i18n';
import i18n from '../../i18n/index';
const { t } = useI18n();
const languages = ['kr', 'en', 'id', 'pt'];
const language = ref('');
const isActive = ref(false);
const scrollActive = ref(false);
const slide = ref(false);

const handleHeader = () => {
  document.addEventListener('wheel', (e) => {
    const scrollDirection = e.deltaY;
    scrollDirection > 0 ? (scrollActive.value = true) : (scrollActive.value = false);
  });

  //로컬스토리지에 언어 저장
  watch(language, (newLanguage) => {
    localStorage.setItem('locale', newLanguage);
    i18n.global.locale.value = newLanguage;
    window.location.reload();
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop <= 100) scrollActive.value = false;
  });
};

onMounted(handleHeader);

// 언어를 선택하는 함수

// 언어 토글(클릭하면 열리고 마우스가 벗어나면 사라지는 기능)
const settingHeaderChangeLanguage = () => {
  isActive.value = !isActive.value;
};

// 모바일 슬라이드 메뉴
const headerMobileMenuActive = () => {
  if (slide.value) return (slide.value = false);
  slide.value = true;
};
onBeforeRouteUpdate((to, from, next) => {
  if (to.path != from.path) {
    slide.value = false;
    next();
  }
});
</script>

<style scoped>
@import '../../style/header.css';
.slideToggle-enter-from,
.slideToggle-leave-to {
  height: 0;
}
.slideToggle-enter-active,
.slideToggle-leave-active {
  transition: all 0.2s linear;
  overflow: hidden;
}
.slideToggle-enter-to,
.slideToggle-leave-from {
  height: 307.562px;
}
</style>
