// importo il router
import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti
import HomePage from './pages/HomePage.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';
import AppGithub from './pages/AppGithub.vue';
import AppContact from './pages/AppContact.vue';
import ProjectDetails from './pages/ProjectDetails.vue';

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
    {
      path: '/github',
      name: 'github',
      component: AppGithub,
    },
    {
      path: '/contact',
      name: 'contact',
      component: AppContact,
    },
    // rotta che gestisce il singolo progetto
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: ProjectDetails,
    },
  ],
});

// esporto il route
export {router};