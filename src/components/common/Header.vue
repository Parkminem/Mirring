<template>
  <header id="header" class="">
    <div class="container_1539">
      <ul class="content pc">
        <li class="logo">
          <router-link to="/">
            <img src="assets/images/common/logo.png" alt="logo" title="logo" />
          </router-link>
        </li>
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
          <ul class="animation_language_change">
            <li class="active" onclick="changeLanguage('kr')">KR</li>
            <li onclick="changeLanguage('us')">EN</li>
            <li onclick="changeLanguage('id')">ID</li>
            <li onclick="changeLanguage('pt')">PT</li>
          </ul>
        </li>
      </ul>
      <!-- mobile -->
      <div class="mobile">
        <ul class="content">
          <li class="logo">
            <a href="/"
              ><img src="assets/images/common/logo.png" alt="logo" title="logo"
            /></a>
          </li>
          <li class="menu_img" onclick="headerMobileMenuActive()">
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
            <ul class="animation_language_change">
              <li class="active" onclick="changeLanguage('kr')">KR</li>
              <li onclick="changeLanguage('us')">EN</li>
              <li onclick="changeLanguage('id')">ID</li>
              <li onclick="changeLanguage('pt')">PT</li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- // mobile -->
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
@import '../../style/header.css';
</style>
