import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { library } from '@fortawesome/fontawesome-svg-core';
 import { fas } from '@fortawesome/free-solid-svg-icons';
import ContentHeader from './components/ContentHeader.vue'
import Content from './components/Content.vue'
library.add(fas);
const app = createApp(App)

app.component('content-header', ContentHeader)
    .component('FontAwesome', FontAwesomeIcon)
    .component('content', Content)
    .use(store).use(router).mount('#app')
