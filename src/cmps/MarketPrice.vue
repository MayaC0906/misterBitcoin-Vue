<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: "Market-Price",
            backgroundColor: "#fecb9e",
            data: this.data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>