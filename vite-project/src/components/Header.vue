<template>
    <div class="wrapper">
        <div class="header js-header">
            <div class="container">
                <div class="navbar navbar--collapse u-clearfix">
                <a href="#" class="navbar__logo u-clearfix"></a>
                <a href="#overlay" class="menu-toggle">
                    <span></span><span></span><span></span>
                </a>
                <div id="overlay" class="nav navbar__nav popup-nav u-clearfix">
                    <ul class="menu nav__menu u-clearfix">
                        <li><a href="#about" class="menu__item">About</a></li>
                        <li><a href="#projects" class="menu__item">Projects</a></li>
                        <li><a href="#experience" class="menu__item">Experience</a></li>
                        <li><a href="#contact" class="menu__item">Contact</a></li>
                    </ul>
                    <div class="nav__icon-group">
                        <a href="#" class="icon-btn"><i class="icon icon-fb"></i></a>
                    </div>
                    <a href="#!" class="popup-close"><span></span><span></span></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount } from 'vue'

  onMounted(() => {
    const header = document.querySelector('.js-header')

    const handleScroll = () => {
        if (window.scrollY > 50) {
        header.classList.add('header--scrolling')
        } else {
        header.classList.remove('header--scrolling')
        }
    }

    window.addEventListener('scroll', handleScroll)

    // 清除事件
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    })
  </script>
  
  <style scoped>
  </style>