import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/svg-material-icons';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import './assets/styles/main.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet,
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
});
app.use(createPinia());
app.use(router);

app.mount('#app');
