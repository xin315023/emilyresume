<template>
	<!--  Start skill-->
	<div class="section__inner">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="info">
						<h3 class="info__title">專案經歷</h3>
						<div class="row">
							<div class="col-sm-6">
								<div class="parallax-container parallax-container-project parallax-container-about">
									<SkillChart
										class="image rellax"
										title="Front End"
										:labels="frontendLabels"
										:data="frontendData"
										:colors="frontendColors"
										defaultLine="FRONTEND"
									/>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="parallax-container parallax-container-project parallax-container-about">
									<SkillChart
										class="image rellax"
										title="Back End"
										:labels="backendLabels"
										:data="backendData"
										:colors="backendColors"
										defaultLine="BACKEND"
									/>
								</div>
									
							</div>
						</div>
						<div class="projectCard">
							<div class="card">
								<!-- 購物車網站 -->
								<h2 class><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
									購物車網站
								</h2>
								<p>
									專案簡介：開發購物車相關網站，負責前端UI介面設計、開發前端介面並串接購物車相關流程、協助系統上線。
								</p>
								<p>
									期間：2023/01 – 2023/09
								</p>
								<p>擔任角色：RD</p>
								<p>使用技術：
									<span class="badge badge-skill">HTML</span>
									<span class="badge badge-skill">CSS</span>
									<span class="badge badge-skill">網頁切版</span>
								</p>
								<p>使用工具：接案公司開發之開發工具</p>

								<!-- 自營帳務系統（國外複委託）-->
								<h2 class><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
									自營帳務系統（國外複委託）
								</h2>
								<p>專案簡介：參與「自營帳務系統」專案，負責與業務單位需求訪談、前端UI介面設計、後端資料串接與 API 設計，並參與使用者平測環節、協助系統上線。</p>
								<p>
									期間：2023/10 – 2024/11
								</p>
								<p>擔任角色：BA、RD</p>
								<p>使用技術：
									<span class="badge badge-skill">Vue.js</span>
									<span class="badge badge-skill">Electron</span>
									<span class="badge badge-skill">Node.js</span>
									<span class="badge badge-skill">MariaDB</span>
								</p>
								<p>使用工具：VS Code</p>
								<p>專案環境：Windows、Linux</p>

								<!-- 國衛院藥物模型訓練系統 -->
								<h2 class><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
									國衛院藥物模型訓練系統
								</h2>
								<p>專案簡介：參與「國衛院藥物模型訓練系統」前端開發，負責前端UI介面設計、串接後端資料、協助系統上線。</p>
								<p>
									期間：2024/10 – 2025/03
								</p>
								<p>擔任角色：RD</p>
								<p>使用技術：
									<span class="badge badge-skill">React.js</span>
								</p>
								<p>使用工具：VS Code</p>
								<p>專案環境：Windows</p>

								<!-- 分戶帳2.0 -->
								<h2 class><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
									分戶帳2.0
								</h2>
								<p>專案簡介：參與「分戶帳2.0」專案，負責需求盤點並將抽象的需求具象化、跨組協作傳遞資料、舊系統資料轉換（COBOL 資料）至關連式資料庫中、前端UI介面設計、後端資料串接與 API 設計。</p>
								<p>
									期間：2024/12 – 2025/06
								</p>
								<p>擔任角色：RD、PG</p>
								<p>使用技術：
									<span class="badge badge-skill">Vue.js</span>
									<span class="badge badge-skill">Node.js</span>
									<span class="badge badge-skill">MariaDB</span>
								</p>
								<p>使用工具：VS Code</p>
								<p>專案環境：Windows、Linux</p>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
	<!-- End skill -->
  </template>
  
  <script setup>
  /** import */
  import SkillChart from './SkillChart.vue'

  const frontendLabels = [
  	'UI Design/Figma', 'HTML/CSS', 'JavaScript', 'Vue.js', 'Axios / Fetch API', 'React.js', 'Bootstrap', 'Wordpress'
  ]
  const frontendData = [5, 20, 20, 20, 15, 15, 5]
  const frontendColors = ['#f7b267', '#6ec1e4', '#ffeb3b', '#4caf50', '#2ecc71', '#9b59b6', '#34495e']
  
  const backendLabels = [
  	'Node.js', 'RESTful API', 'ORM(Sequelize)', 'SQL', 'Fastify', 'Swagger'
  ]
  const backendData = [25, 20, 20, 5, 15, 15]
  const backendColors = ['#f78c6b', '#6ec1e4', '#9b59b6', '#2c3e50', '#27ae60', '#f1c40f']
  </script>

  
<style scoped>
.badge-skill {
  display: inline-block;
  background: #e0f4ff;
  color: #0366d6;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
  margin-right: 6px;
  margin-bottom: 4px;
}
</style>
  
 
  