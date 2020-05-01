<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    props: {
        confirmed : Number,
        active : Number,
        recovered : Number,
        deaths : Number
    },
    data () {
      return {
        //Chart.js options that controls the appearance of the chart
        options: {
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
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(
            {
                //Data to be represented on x-axis
                labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        pointBackgroundColor: 'white',
                        borderWidth: 2,
                        pointBorderColor: '#FFF',
                        //Data to be represented on y-axis
                        data: [this.confirmed,this.active,this.recovered,this.deaths],
                        backgroundColor: ["#007bff", "#dc3545", "#28a745", "#6c757d"], 
                    }
                ]
            }, this.options)
        }
  }
</script>