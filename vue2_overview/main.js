import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app')

import a_attribute_bind from './components/a_attribute_bind.vue'; //全局注册
const app = createApp(App);

// 在这中间写组件注册
app.component('a_attribute_bind', a_attribute_bind);

app.mount('#app');