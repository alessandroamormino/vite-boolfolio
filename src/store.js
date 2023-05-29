import {reactive} from 'vue';
export const store = reactive({
  // Proprietà dello store

  // URI API
  URI: 'http://127.0.0.1:8000/api/projects',

  // memorizzo la risposta della chiamata
  projects: '',


});