<script>

import { car_store } from '@/stores/car_store'


export default {
  data() {
    return {
      car: null,
      store: car_store(),
      slide:null
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
  <q-card class="container column  container2 flex-center">
    <h3 class="volkorn titre-desc" style="color: white">Caractéristiques de la voiture :</h3>
    <table style="font-size: 1.3em;color: white;width: 50%;border: 2px white solid">
      <tr class="volkorn ligne">
        <td class="q-pl-sm" style="width: 70%">Marque :</td>
        <td class="q-pr-sm text-right">{{car.marque}}</td>
      </tr>
      <tr class="volkorn ligne">
        <td class="q-pl-sm">Modèle :</td>
        <td class="q-pr-sm text-right">{{car.modele}}</td>
      </tr>
      <tr class="volkorn ligne">
        <td class="q-pl-sm">Moteur :</td>
        <td class="q-pr-sm text-right">{{car.moteur}}</td>
      </tr>
      <tr class="volkorn ligne">
        <td class="q-pl-sm">Nombre de Places :</td>
        <td class="q-pr-sm text-right">{{car.place}}</td>
      </tr>
      <tr class="volkorn ligne">
        <td class="q-pl-sm">Couleur :</td>
        <td class="q-pr-sm text-right">{{car.couleur}}</td>
      </tr>
    </table>
    <p class="volkorn q-pa-xl" style="color: white;font-size: 1.3em">{{car.desc_offre}}</p>
    <section>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        :autoplay="5000"
        infinite
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="500px"
        style="width: 800px"
        class="text-purple roundedClass q-ma-xl"
      >
        <q-carousel-slide v-for="slide in car.caroussel" :key="slide.image" :name="slide.index"
                          class="column no-wrap flex-center">
          <q-img :src="`picture/voiture/${slide.image}`" no-spinner fit="cover" />
        </q-carousel-slide>
      </q-carousel>
    </section>



  </q-card>

</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 550px

.img-png
  max-width: 700px
  margin-top: -50px
  margin-left: 50px

.sub-title
  margin-top: -70px

.container2
  margin-top: 100px

.titre-desc
  text-decoration: underline

.ligne:nth-child(odd)
  background-color: $dark-red
</style>