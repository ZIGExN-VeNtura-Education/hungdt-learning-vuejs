import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia} from 'pinia';
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();

pinia.use(PiniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount('#app');
