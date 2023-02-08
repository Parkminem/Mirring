import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes/index';
import i18n from './i18n';

import '@/assets/style/reset.css';
import '@/assets/style/font.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(i18n).use(pinia).mount('#app');
