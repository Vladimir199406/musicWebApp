import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidationPlugin from './includes/validation';
import { auth } from './includes/firebase';
import SimpleIcon from './directives/simple-icon';
import './assets/tailwind.css';
import './assets/main.css';
import i18n from './includes/i18n';
import './registerServiceWorker';
import GlobalComponents from './includes/_globals';
import ProgressBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidationPlugin);
    app.use(GlobalComponents);
    app.directive('simple-icon', SimpleIcon);
    app.mount('#app');
  }
});
