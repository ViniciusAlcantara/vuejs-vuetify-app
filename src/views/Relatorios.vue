<template>
  <v-container
    fluid
    grid-list-md>
    <v-flex
      md12
      sm12
      lg12
    >
      <material-chart-card
        :data="dailySalesChart.data"
        :options="dailySalesChart.options"
        color="info"
        type="Line"
      >
        <h4 class="title font-weight-light">Vendas Diárias</h4>
        <p class="category d-inline-flex font-weight-light">
          <v-icon
            color="green"
            small
          >
            mdi-arrow-up
          </v-icon>
          <span class="green--text">55%</span>&nbsp;
          de aumento nas vendas hoje
        </p>

        <template slot="actions">
          <v-icon
            class="mr-2"
            small
          >
            mdi-clock-outline
          </v-icon>
          <span class="caption grey--text font-weight-light">atualizado há 4 minutos</span>
        </template>
      </material-chart-card>
    </v-flex>
    <v-flex
      md12
      sm12
      lg12
    >
      <material-chart-card
        :data="emailsSubscriptionChart.data"
        :options="emailsSubscriptionChart.options"
        :responsive-options="emailsSubscriptionChart.responsiveOptions"
        color="primary"
        type="Bar"
      >
        <h4 class="title font-weight-light">Vendas Mensais</h4>
        <p class="category d-inline-flex font-weight-light">Comparação dos Últimos 12 meses de venda</p>

        <template slot="actions">
          <v-icon
            class="mr-2"
            small
          >
            mdi-clock-outline
          </v-icon>
          <span class="caption grey--text font-weight-light">atualizado há 10 minutos atrás</span>
        </template>
      </material-chart-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'RelatoriosView',
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
