<template>
  <Pageloading />
  <div id="app">
    <Headerbar />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </div>
</template>

<script setup>
import Pageloading from './components/Pageloading.vue'
import Headerbar from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
</script>

<style>
@import './assets/style.css';
@import './assets/layout.css';
@import './assets/reset.css';
@import './assets/jquery.fullPage.css';
</style>
