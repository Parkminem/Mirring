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
        path: '/',
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
  routes
});

export default router;
