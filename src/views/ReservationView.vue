<script>
import { car_store } from '@/stores/car_store'
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref('2020/07/08','2020/07/17')
    }
  },
  data() {
    return {
      car: null,
      store: car_store()

    }
  },
  created() {
    this.init(this.$route.params.IDvoiture)
  },
  methods: {
    init(ID) {
      this.car = this.store.carList[ID]
      window.scrollTo({ top: 0 })
    }
  }
}

</script>

<template>
  <section class="row justify-center">
    <q-card class="q-pa-sm q-pb-xl  container col-10 volkorn text-center">
      <h2 class="text-white " style="text-decoration: underline; font-style: italic" >Réservation :</h2>
      <h6 class="volkorn">Modèle : {{car.name}}</h6>
      <h6 class="volkorn">Prix par jour : {{car.prix}}</h6>
      <h6 class="volkorn">Période de location :</h6>
      <q-btn icon="event" round color="primary" class="q-mt-xl">
        <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
          <q-date v-model="model" range />
        </q-popup-proxy>
      </q-btn>
      <p>{{model}}</p>

      <h6 class="volkorn">Prix total : </h6>



    </q-card>
  </section>
</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  margin-top: 100px
  min-height: 300px

h6
  margin-bottom: -30px
</style>