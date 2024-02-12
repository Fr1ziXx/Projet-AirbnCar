<script setup>
alert("Ceci est un site à destination d'un projet Universitaire")

</script>
<script>

export default {
  data() {
    return {
      slide: 'nom voiture1',
      carouselSlide: [
        {
          name: 'nom voiture1',
          img: 'voiture1/voiture1p1.png'
        },
        {
          name: 'nom voiture2',
          img: 'voiture4.png'
        },
        {
          name: 'nom voiture3',
          img: 'voiture5.png'
        },
        {
          name: 'nom voiture4',
          img: 'voiture7.png'
        },
        {
          name: 'nom voiture5',
          img: 'voiture9.png'
        }
      ]
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
        class="text-purple roundedClass q-ma-xl"
      >
        <q-carousel-slide v-for="slide in carouselSlide" :key="slide.img" :name="slide.name"
                          class="column no-wrap flex-center">
          <q-img :src="`picture/voiture/${slide.img}`" no-spinner fit="cover" />
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


