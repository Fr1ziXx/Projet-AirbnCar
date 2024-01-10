<script>
export default {
  data() {
    return {
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
  <div class="parallax row justify-center items-center">
    <div id="para-img"></div>
    <h2 id="title" class="text-white text-italic volkorn">{{ name_car }}</h2>
  </div>
  <div class="parallax row justify-center items-center">
    <div id="para-img" style=""></div>
  </div>
  <section class="row justify-center">
    <q-card class="q-pa-lg q-pb-xl container col-10 row">
      <q-carousel
        v-model="test"
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
        <q-carousel-slide v-for="test in slide" :key="test.img"
                          class="column no-wrap flex-center">
          <q-img :src="`picture/voiture/${test.img}`" no-spinner fit="cover" />
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </section>
</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  margin-top: 400px
  min-height: 300px

#titre-voiture
  margin-top: 150px

.parallax
  min-height: 100vh
  position: absolute
  width: 100vw
  top: 0
  right: 0


#para-img
  background-image: url("../../public/picture/voiture/voiture1/voiture1p1.png")
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