<script>

import { useQuasar } from 'quasar'
import { car_store } from '@/stores/car_store'

export default {
  data() {
    return {
      $q: useQuasar(),

      car:null,
      carousel: '1',
      store:car_store()
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.car = this.store.homeList
      window.scrollTo({ top: 0 })
    }
  },
  mounted() {
    if (!sessionStorage.getItem('alert')) {
      this.$q.notify({
        progress: true,
        message: 'Ceci est un site à destination Universitaire',
        color: 'primary',
        multiLine: true,
        position: 'top',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          {
            label: 'J\'ai Compris', color: 'white', handler: () => {
            }
          }
        ]
      })
      sessionStorage.setItem('alert', 'false')
    }
  }
}
</script>

<template>

  <div class="parallax row justify-center items-center">
    <div id="para-img"></div>
    <h1 id="title" class="text-white text-italic volkorn">Airb&Car</h1>
  </div>
  <div class="parallax row justify-center items-center">
    <div id="para-img"></div>
  </div>

  <section class="row justify-center">
    <q-card class="q-pa-lg q-pb-xl  container col-10">
      <h1 class="text-h3 text-white text-weight-bold text-italic oswald">Airb&Car est une plateforme de location de
        voitures de particuliers en particuliers</h1>
      <h4 class="text-white oswald text-italic">Voici nos offres du moment :</h4>

      <q-carousel
        v-model="carousel"
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
        class="text-purple roundedClass q-ma-xl"
      >
        <q-carousel-slide v-for="slide in car" :key="slide.index" :name="slide.index"
                          class="column no-wrap flex-center no-padding">
          <q-img :src="`/picture/voiture/${slide.image}`" no-spinner fit="cover" class="full-height full-width" />
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </section>


</template>

<style lang="sass" scoped>
.container
  background-color: $negative !important
  border-radius: 7px

.q-carousel__slide
  padding: 0 !important

section
  margin-top: 850px
  transform: translateY(-50%)


.parallax
  min-height: 100vh
  position: absolute
  width: 100vw
  top: 0
  right: 0


#para-img
  background-image: url("../../public/picture/Fond-accueil.jpg")
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100%
  position: absolute
  width: 100%


#title
  padding-bottom: 35vh
  z-index: 200


</style>


