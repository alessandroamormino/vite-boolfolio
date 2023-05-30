// importo il router
import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti
import HomePage from './pages/HomePage.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';

// setto la costante router per definire le rotte
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    }, 
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects,
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
    },
  ],
});

// esporto il route
export {router};