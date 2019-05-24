<template>
  <v-container
    fluid
    grid-list-md>
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
  </v-container>
</template>

<script>
export default {
  name: 'FeedbackView',
  data () {
    return {
      rating: 5
    }
  }
}
</script>

<style scoped>

</style>
