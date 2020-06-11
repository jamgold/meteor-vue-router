import Vue from 'vue';
// import VueMeteorTracker, { MeteorData } from 'vue-meteor-tracker';
import router from './router';

import App from './App.vue';

export default function createApp(c){
  // sync(store, router);

  const app = new Vue({
    el: '#app',
    router,
    ...App,
  });

  return {
    app,
    router,
  }
};
