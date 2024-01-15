<script>

import { ref } from 'vue'

export default {
  data() {
    return {
      date: ref(''),
      name_car: 'Cadillac Escalade',
      prix: '375€/jour',
      src: 'voiture1/voiture1p1.png',
      test:'',
      slide: [
        {
          img:'voiture1/voiture1p2.png'
        },
        {
          img:'voiture1/voiture1p3.png'
        },
        {
          img:'voiture1/voiture1p4.png'
        },
        {
          img:'voiture1/voiture1p5.png'
        },
        {
          img:'voiture1/voiture1p6.png'
        },

      ]
    }
  }
}


</script>

<template>
  <q-card class="container row q-pa-md">
    <div class="col-6 div1 row justify-center">
      <h3 class="volkorn text-white col-8 q-pt-xl">Découvrer le Cadillac Escalade</h3>
      <h5 class="volkorn text-white col-8 sub-title">Le 4x4 nouvelle génération</h5>
    </div>
    <div class="col-6 div2">
      <img src="public/picture/voiture/voiture1/voiture1p0.png" alt="voiture" class="img-png"/>
    </div>
    <div class="col-12 div3 row">
      <div class="col-3 row justify-center" style="background-color: black">
        <div class="col-11 q-my-lg" style="background-color: white">

        </div>
      </div>
      <div class="col-3 row justify-center" style="background-color: white">
        <div class="col-11 q-my-lg row justify-center" style="background-color: black">

        </div>
      </div>
      <div class="col-3 row justify-center" style="background-color: black">
        <div class="col-11 q-my-lg" style="background-color: white">

        </div>
      </div>
      <div class="col-3 row justify-center">
        <q-btn rounded push  color="black" text-color="white" class="col-11 q-my-lg volkorn" type="button" to="/" label="Réserver" style="font-size: 3em"/>

      </div>




    </div>
  </q-card>

</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 550px

.img-png
  scale: 120%
  margin-top: -50px
  margin-left: 50px

.sub-title
  margin-top: -70px



</style>