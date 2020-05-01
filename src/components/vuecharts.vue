<template>
  <div class="container">
    <div v-if="arrPositive.length > 0">
      <div class="row mt-3">
        <div class="col">
          <h3 class="text-center">Daily Cases - India</h3>
        </div>
      </div>
      <div class="row mt-5" v-if="arrPositive.length > 0">
        <div class="col">
          <h4 class="text-center">Confirmed</h4>
          <line-chart
            :chartData="arrPositive"
            :options="chartOptions"
            :chartColors="positiveChartColors"
            label="Positive"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrRecovered.length > 0">
        <div class="col">
          <h4 class="text-center">Recovered</h4>
          <line-chart
            :chartData="arrRecovered"
            :options="chartOptions"
            :chartColors="recoveredColors"
            label="Recovered"
          />
        </div>
      </div>

      <div class="row mt-5 mb-5" v-if="arrDeaths.length > 0">
        <div class="col">
          <h4 class="text-center">Deaths</h4>
          <line-chart
            v-if="arrDeaths.length > 0"
            :chartData="arrDeaths"
            :options="chartOptions"
            :chartColors="deathColors"
            label="Deaths"
          />
        </div>
      </div>
    </div>
    <div v-else class="mt-5 d-flex align-items-center justify-content-center">
        <md-progress-spinner id="spinner" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"/>
        <h4 class="text-white pl-3 mb-0">Loading ... </h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./charts/LineChart";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "##fff",
        pointBackgroundColor: "#FFFFFF",
        backgroundColor: "#007bff"
      },
      arrRecovered: [],
      recoveredColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#FFFFFF",
        backgroundColor: "#28a745"
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#FFFFFF",
        backgroundColor: "#dc3545"
      },
      //Chart.js options that controls the appearance of the chart
      chartOptions: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                  fontColor: "#FFF", // this here
                
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
                ticks: {
                    beginAtZero: true,
                    fontColor: "#FFF", // this here
                },
                gridLines: {
                    display: false
                }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
    };
  },
  async created() {
    const { data } = await axios.get("https://api.covid19india.org/data.json");
    // console.log(data);
    let casedata = data.cases_time_series;
    casedata.forEach(d => {
      const {
        totalconfirmed,
        totalrecovered,
        totaldeceased,
        date
      } = d;

      this.arrPositive.push({ date, total: totalconfirmed });
      this.arrRecovered.push({ date, total: totalrecovered });
      this.arrDeaths.push({ date, total: totaldeceased });
    });
  }
};
</script>

<style>
</style>
