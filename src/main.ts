import { createApp } from 'vue'
import { createPinia } from 'pinia'
import validate from '../directives/validate'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(router)
app.directive('validate', validate)
app.use(createPinia())
app.mount('#app')
