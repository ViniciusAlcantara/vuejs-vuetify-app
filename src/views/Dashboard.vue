<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg6
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
        lg6
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
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          color="green"
          icon="mdi-trending-up"
          title="Maior Venda de Hoje"
          value="R$ 63,54"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          color="blue"
          icon="mdi-thumb-up"
          title="Produto mais Pedido"
          value="Lasanha de Bacon"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg4
      >
        <material-stats-card
          color="primary"
          icon="mdi-trending-down"
          title="Menor Venda de Hoje"
          value="R$ 23,73"
        />
      </v-flex>
      <v-flex
        md12
        lg12
      >
        <material-card
          color="primary"
          title="Pedidos"
          text="Últimos pedidos feitos hoje"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.mesa }}</td>
              <td class="text-xs-right">{{ item.valor }}</td>
              <td class="text-xs-right">{{ item.hora }}</td>
              <td class="text-xs-right">{{ item.status }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
        lg12
      >
        <material-card
          title="FeedBacks"
          text="Melhores opiniões de clientes hoje"
          class="card-tabs"
          color="blue">

          <v-list three-line>
            <v-card
              elevation-2
              flat
              hover>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Melhor lugar em que já comi!
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    <v-rating v-model="rating"/>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card>
            <v-card elevation-2>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Melhor lugar em que já comi!
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    <v-rating v-model="rating"/>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card>
            <v-card elevation-2>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Melhor lugar em que já comi!
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    <v-rating v-model="rating"/>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card>
          </v-list>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      rating: 5,
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
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Mesa',
          value: 'mesa'
        },
        {
          sortable: false,
          text: 'Valor',
          value: 'valor',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Hora do Pedido',
          value: 'hora',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Status',
          value: 'status',
          align: 'right'
        }
      ],
      items: [
        {
          mesa: 'Mesa 1',
          status: 'Preparado',
          hora: '17:58:48',
          valor: 'R$ 35,73'
        },
        {
          mesa: 'Mesa 2',
          status: 'Concluído',
          hora: '17:58:40',
          valor: 'R$ 23,73'
        }, {
          mesa: 'Mesa 3',
          status: 'Pago',
          hora: '17:58:38',
          valor: 'R$ 56,14'
        }, {
          mesa: 'Mesa 4',
          status: 'Entregue',
          hora: '17:58:35',
          valor: 'R$ 38,73'
        }, {
          mesa: 'Mesa 5',
          status: 'Concluído',
          hora: '17:58:30',
          valor: 'R$ 63,54'
        }
      ]
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
