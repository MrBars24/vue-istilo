import Vue from 'vue';
import App from './App.vue';

// Istilo Css
import './components';
import './directives';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
