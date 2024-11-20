import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import 'animate.css';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

//引入重置默认样式
// import '@/styles/index.scss';
const app = createApp(App)
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus, { locale: zhCn });




// 全局注册所有 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app')