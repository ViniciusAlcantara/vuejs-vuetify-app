<template>
  <v-container
    fluid
    grid-list-md>
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
  </v-container>
</template>

<script>
export default {
  name: 'PedidosView',
  data () {
    return {
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
  }
}
</script>

<style scoped>

</style>
