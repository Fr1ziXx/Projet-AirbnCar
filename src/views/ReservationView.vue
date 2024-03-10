<script>
import { car_store } from '@/stores/car_store'

export default {
  setup () {
   /* const date = ref('2019/03/01')
    const proxyDate = ref('2019/03/01')*/
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
      <div class="q-pt-xl">
        <p>date de début</p>
        <q-btn icon="event" round color="primary">
          <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="proxyDate">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>
      </div>

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