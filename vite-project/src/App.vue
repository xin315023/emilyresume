<template>
  <Pageloading />
  <div id="app">
    <Headerbar />
    <div class="content-wrapper">
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="cert"><Cert /></section>
    </div>
    <section id="contact"><Contact /></section>
  </div>
</template>

<script setup>
  import Pageloading from './components/Pageloading.vue'
  import Headerbar from './components/Header.vue'
  import About from './components/About.vue'
  import Projects from './components/Projects.vue'
  import Experience from './components/Experience.vue'
  import Cert from './components/Certlist.vue'
  import Contact from './components/Contact.vue'
</script>

<style>
  @import './assets/style.css';
  @import './assets/layout.css';
  @import './assets/reset.css';
  @import './assets/jquery.fullPage.css';
  html {
    scroll-behavior: smooth;
  }
</style>
