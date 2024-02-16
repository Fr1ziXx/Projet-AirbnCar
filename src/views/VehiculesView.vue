<script>
import { car_store } from '@/stores/car_store'

export default {
  data() {
    return {
      store: car_store(),
      search: ''
    }
  }
}
</script>

<template>
  <section class="row justify-center">
    <q-input v-model="search" rounded outlined label="Rechercher">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-card class="q-pa-lg q-pb-xl  container col-10">
      <q-card v-for="(car,index) in store.carList" :key="car.img" :name="car.name"
              @click="$router.push(`/voiture/${index}`)"
              class="container-item q-mb-lg row cursor-pointer" v-show="car.name.toLowerCase().includes(search.toLowerCase())">
        <div class="col-4">
          <q-img :src="`picture/voiture/${car.img}`" no-spinner class="col-4 picture-item q-ml-md" />
        </div>
        <div class="col-8 text-contenair text-white">
          <h4 class="text-italic volkorn titre-voiture">{{ car.name }}</h4>
          <h5 class="prix-voiture">{{ car.prix }}</h5>
          <p class="des-voiture">{{ car.desc_offre }}</p>
        </div>
      </q-card>

    </q-card>
  </section>
</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  margin-top: 100px
  min-height: 300px

.container-item
  background-color: $dark-red !important
  border-radius: 10px !important
  height: 290px
  padding: 20px 0

.picture-item
  border-radius: 5px
  max-width: 375px

.text-contenair
  padding-left: 30px
  margin-top: -50px
  padding-right: 80px

.titre-voiture
  text-decoration: underline

.prix-voiture
  margin-top: -40px

.des-voiture
  margin-top: 40px
  font-size: 1.1em


</style>