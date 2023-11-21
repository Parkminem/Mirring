import { createRouter, createWebHistory } from 'vue-router';

// 이렇게 View 컴포넌트들을 미리 임포트 시키는 건 최초 로딩 시간에 영향을 줍니다.
// Dynamic Import (동적 코드 분할, Lazy Loading)를 통해 동적으로 임포트합시다.
// 사용법은 import() 함수를 이용하는 것입니다.
// ex) component: () => import('../views/MainView.vue')

// import Layout from '@/layout/Layout.vue';
// import MainView from '@/views/MainView.vue';
// import AboutUsView from '@/views/AboutUsView.vue';
// import BusinessView from '@/views/BusinessView.vue';
// import CareersView from '@/views/CareersView.vue';
// import ContactView from '@/views/ContactView.vue';
// import ContentsView from '@/views/ContentsView.vue';
// import OurTechView from '@/views/OurTechView.vue';
// import DetailNewsView from '@/views/DetailNewsView.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: () => import('@/layout/Layout.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       component: () => import('@/views/MainView.vue')
  //     },
  //     {
  //       path: '/about',
  //       component: () => import('@/views/AboutUsView.vue')
  //     },
  //     {
  //       path: '/business',
  //       component: () => import('@/views/BusinessView.vue')
  //     },
  //     {
  //       path: '/careers',
  //       component: () => import('@/views/CareersView.vue')
  //     },
  //     {
  //       path: '/contact',
  //       component: () => import('@/views/ContactView.vue')
  //     },
  //     {
  //       path: '/contents',
  //       component: () => import('@/views/ContentsView.vue')
  //     },
  //     {
  //       path: '/tech',
  //       component: () => import('@/views/OurTechView.vue')
  //     },
  //     {
  //       path: '/detail',
  //       component: () => import('@/views/DetailNewsView.vue'),
  //       name: 'detail'
  //     }
  //   ]
  // },
  // {
  //   path: '/notfound',
  //   name: '404',
  //   component: () => import('@/layout/ErrorLayout.vue')
  // }
  { path: '/ready', name: 'ready', component: () => import('@/views/ReadyView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/ready' }
  // { path: '/:pathMatch(.*)*', redirect: '/notfound' }
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
