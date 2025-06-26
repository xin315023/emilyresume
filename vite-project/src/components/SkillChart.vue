<!-- src/components/SkillChart.vue -->
<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

const props = defineProps({
  title: String,
  labels: Array,
  data: Array,
  colors: Array,
})

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const chartRef = ref(null)
const chartInstance = ref(null)

let centerText = 'Skill'; // 預設文字

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, chartArea, tooltip } = chart;

    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;

    ctx.save();
    ctx.font = '26px arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let line1 = `${props.title}`;
    let line2 = '';

    // 如果滑鼠有 hover 到資料改文字
    if (tooltip && tooltip.opacity > 0 && tooltip.dataPoints?.length) {
      const hovered = tooltip.dataPoints[0];
      line1 = `${hovered.formattedValue}%`;
      line2 = hovered.label;

      const offset = 14;
      ctx.fillText(line1, centerX, centerY - offset); // 第一行：數值
      ctx.fillText(line2, centerX, centerY + offset); // 第二行：label
    } else {
      ctx.fillText(line1, centerX, centerY);
    }

    ctx.restore(); // 重新選染
  }
};

onMounted(() => {
  chartInstance.value = new Chart(chartRef.value, {
    type: 'doughnut',
    data: {
      labels: props.labels,
      datasets: [{
        data: props.data,
        backgroundColor: props.colors,
        hoverOffset: 20
      }]
    },
    plugins: [centerTextPlugin],
    options: {
      cutout: '80%',
      responsive: true,
      maintainAspectRatio: false, // 讓父容器控制大小
      plugins: {
        legend: {
          labels: {
            font: {
              size: 18 // 調整這裡變大字
            },
            usePointStyle: true, // 啟用點樣式
            pointStyle: 'rect'   // 改為正方形
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              return `${context.label}：${context.raw}%`;
            }
          }
        }
      },
    }
  });
});
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 100% !important;
  margin: 0 auto;
  display: block;
}
</style>
