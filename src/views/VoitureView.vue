<script>

import { car_store } from '@/stores/car_store'


export default {
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
      this.car = this.store.carList[ID];
      window.scrollTo({top: 0});
    }
  }
}


</script>

<template>
  <q-card class="container row q-pa-md">
    <div class="col-6 div1 row justify-center">
      <h3 class="volkorn text-white col-8 q-pt-xl">{{ car.name }}</h3>
      <h5 class="volkorn text-white col-8 sub-title">Le 4x4 nouvelle génération</h5>
    </div>
    <div class="col-6 div2">
      <img :src="`../picture/voiture/${car.img_detoure}`" alt="voiture" class="img-png" />
    </div>
    <div class="col-12 div3 row">
      <div class="col-3 row justify-center">
        <div class="col-11 q-my-lg">

        </div>
      </div>
      <div class="col-3 row justify-center">
        <div class="col-11 q-my-lg row justify-center">

        </div>
      </div>
      <div class="col-3 row justify-center">
        <div class="col-11 q-my-lg">

        </div>
      </div>
      <div class="col-3 row justify-center">
        <q-btn rounded push color="black" text-color="white" class="col-11 q-my-lg volkorn btn-reserv" type="button"
               to="/" label="Réserver" style="font-size: 3em" />

      </div>
    </div>
  </q-card>
  <q-card class="container row q-pa-md container2 justify-center">
    <h4 class="volkorn titre-desc" style="color: white">Caractéristiques de la voiture :</h4>

  </q-card>

</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 550px

.img-png
  max-width: 750px
  margin-top: -50px
  margin-left: 50px

.sub-title
  margin-top: -70px

.container2
  margin-top: 100px

.titre-desc
  text-decoration: underline

</style>