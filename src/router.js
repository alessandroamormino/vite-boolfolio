// importo il router
import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti
import HomePage from './pages/HomePage.vue';

// setto la costante router per definire le rotte
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    }
  ],
});

// esporto il route
export {router};