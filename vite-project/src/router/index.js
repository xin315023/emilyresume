// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router