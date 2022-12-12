import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/Layout.vue';
import MainView from '../views/MainView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import BusinessView from '../views/BusinessView.vue';
import CareersView from '../views/CareersView.vue';
import ContactView from '../views/ContactView.vue';
import ContentsView from '../views/ContentsView.vue';
import OurTechView from '../views/OurTechView.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: MainView
      },
      {
        path: '/about',
        component: AboutUsView
      },
      {
        path: '/business',
        component: BusinessView
      },
      {
        path: '/careers',
        component: CareersView
      },
      {
        path: '/contact',
        component: ContactView
      },
      {
        path: '/contents',
        component: ContentsView
      },
      {
        path: '/tech',
        component: OurTechView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //뒤로가기 시 이동 전 스크롤로 뒤로가게 됨, 그 이외는 스크롤탑 0
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else if (to.hash == '#main03') return { el: to.hash, behavior: 'smooth', top: 400 };
    else if (to.hash) return { el: to.hash, behavior: 'smooth', top: 100 };
    else return { top: 0 };
  }
});

export default router;
