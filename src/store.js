import {reactive} from 'vue';
export const store = reactive({
  // Proprietà dello store

  // URI
  URI: 'http://127.0.0.1:8000/',
  // API
  API: 'api/projects',
  // memorizzo la risposta della chiamata
  projects: '',

  // Gestisco lo spostamento delle pagine con un activeLink
  activeLink: 0,

});