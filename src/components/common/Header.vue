<template>
  <header id="header" :class="{ active: scrollActive }">
    <div class="container_1539">
      <ul class="content pc">
        <li class="logo">
          <router-link to="/">
            <img src="@/assets/images/common/logo.png" alt="logo" title="logo" />
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
            <a href="/"><img src="@/assets/images/common/logo.png" alt="logo" title="logo" /></a>
          </li>
          <li class="menu_img" @click="headerMobileMenuActive">
            <img src="@/assets/images/common/menu.png" alt="menu" title="menu" />
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
const { t, locale } = useI18n();
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
    locale.value = newLanguage;
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
<style scoped lang="scss">
/* Transition */
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
.router-link-exact-active {
  color: #ec6c00;
}
#header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  &.active {
    transform: translateY(-100%);
    transition-delay: 0.3s;
  }
  .container_1539 .content {
    display: flex;
    align-items: center;
    .logo {
      margin-right: auto;
      img {
        width: 138px;
        height: 38px;
        padding: 32px 0 28px 0;
      }
    }
    .quick_menu {
      font-size: 18px;
      font-weight: bold;
      color: #292929;
      font-family: 'Noto Sans', sans-serif;
      &:nth-child(2) {
        margin-right: 70px;
      }
      &:nth-child(3) {
        margin-right: 58px;
      }
      &:nth-child(4) {
        margin-right: 63px;
      }
      &:nth-child(5) {
        margin-right: 69px;
      }
      @for $i from 6 through 9 {
        &:nth-child(#{$i}) {
          margin-right: 58px;
        }
      }
    }
  }
  .language_change {
    width: 49px;
    height: 25px;
    .animation_language_change {
      position: relative;
      width: 49px;
      height: 25px;
      border-radius: 15px;
      border: 1px solid #969696;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.5s ease;
      padding-top: 3px;
      box-sizing: border-box;
      &::before {
        content: '';
        position: absolute;
        right: 8px;
        top: 10.5px;
        width: 6px;
        height: 5px;
        background-image: url(@/assets/images/common/arrow_down_gray.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      &.active {
        height: auto;
        border-radius: 13px;
        padding: 3px 0 8px 0;
        li {
          opacity: 1;
          height: auto;
          pointer-events: auto;
          margin-bottom: 4px;
          &:nth-child(3) {
            padding-left: 12.8px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      li {
        display: flex;
        align-items: center;
        width: 100%;
        opacity: 0;
        height: 0;
        transition: all 0.5s ease;
        padding-left: 11.8px;
        box-sizing: border-box;
        pointer-events: none;
        font-family: 'Noto Sans', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #969696;
        &.active {
          opacity: 1;
          height: auto;
          position: relative;
          img {
            width: 6px;
            height: 5px;
            margin-left: 4.2px;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  #header .container_1539 {
    width: 100%;
    .content {
      display: none;
    }
    .mobile {
      display: block;
      .content {
        width: 95%;
        margin: 0 auto;
        height: 95px;
        position: relative;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        align-items: center;
        -webkit-box-align: center;
        -webkit-flex-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        .logo img {
          width: 107px;
          height: 29px;
          padding: 0;
        }
        .menu_img {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          img {
            width: 36px;
            cursor: pointer;
          }
        }
      }
      .menu {
        background-color: #f9f9f9;
        padding: 0 2.5%;
        position: relative;
        .quick_menu {
          text-align: right;
          cursor: pointer;
          padding: 10px 0;
          &.active {
            a {
              color: #ec6c00;
            }
          }
          a {
            font-size: 18px;
            font-family: 'Noto Sans', sans-serif;
            font-weight: bold;
          }
        }
        .language_change {
          margin: 0;
          position: absolute;
          bottom: 10px;
        }
      }
    }
  }
}
</style>
