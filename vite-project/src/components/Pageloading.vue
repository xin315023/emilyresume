<template>
	<div v-if="show" class="loading-screen">
	  <div class="typing-text">
		{{ visibleText }}<span class="cursor">|</span>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const show = ref(true)
  const fullText = 'Build, break, learn, repeat.'
  const visibleText = ref('')
  let index = 0
  
  onMounted(() => {
	const interval = setInterval(() => {
	  if (index < fullText.length) {
		visibleText.value += fullText[index++]
	  } else {
		clearInterval(interval)
		  setTimeout(() => {
			show.value = false
		  }, 3000) // 結束後延遲淡出
	  }
	}, 150)
  })
  </script>
  
  <style scoped>
  .loading-screen {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle, #000000, #000000);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	animation: fadeOut 1.3s ease-in 4.5s forwards;
  }
  
  .typing-text {
	font-size: 2rem;
	color: #f9f9f9;
	font-family: 'Courier New', monospace;
	white-space: nowrap;
	overflow: hidden;
  }
  
  .cursor {
	display: inline-block;
	animation: blink 1s step-start infinite;
	color: #f9f9f9;
  }
  
  @keyframes blink {
	50% {
	  opacity: 0;
	}
  }
  
  @keyframes fadeOut {
	to {
	  opacity: 0;
	  visibility: hidden;
	}
  }
  @media (max-width: 768px){
		.typing-text {
			font-size: 1rem;
			color: #f9f9f9;
			font-family: 'Courier New', monospace;
			white-space: nowrap;
			overflow: hidden;
		}
	}
  </style>