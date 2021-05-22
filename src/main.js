import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseCard from './UI/BaseCard.vue'

import Vuelidate from 'vuelidate'

//PrimeVue :
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

//Element Plus :
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ElementPlus);
app.use(Vuelidate);
app.component('base-card',BaseCard);
app.component('prime-button', Button);
app.mount('#app');
