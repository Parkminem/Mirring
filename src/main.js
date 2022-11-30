import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes/index';
// import i18n from './i18n';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
