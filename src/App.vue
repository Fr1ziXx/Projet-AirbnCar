<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import { useQuasar } from 'quasar'

export default {
  data() {
    return {
      search: '',
      $q: useQuasar()
    }
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-img width="60px" src="picture/Logo.png" @click="$router.push('/')" />
        <q-toolbar-title>Airb&Car</q-toolbar-title>

        <q-tabs style="height: 60px">
          <q-route-tab name="vehicule" label="Vehicules" to="/vehicules" class="text-italic" />
          <q-route-tab name="apropos" label="A Propos" to="" class="text-italic" />
          <q-route-tab name="connecter" label="Se connecter" to="/connection" class="text-italic" />
        </q-tabs>
        <q-btn @click="$q.dark.toggle" flat rounded>
          <q-icon :color="$q.dark.isActive ? 'yellow-4' : 'indigo-4'"
                  :name="$q.dark.isActive ? 'light_mode' : 'dark_mode'" rounded size="sm" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-xl">
        <RouterView />
      </q-page>
    </q-page-container>


    <q-footer elevated class="column q-pa-xl">
      <aside class="row justify-between q-pa-md">
        <q-tabs dense>
          <a href="https://www.facebook.com" class="fa fa-facebook"/>
          <a href="https://twitter.com" class="fa fa-twitter"/>
          <a href="https://www.instagram.com" class="fa fa-instagram"/>
          <a href="https://github.com/Fr1ziXx/Projet-AirbnCar" class="fa fa-github"/>
          <a href="https://www.twitch.tv/mvpi59" class="fa fa-twitch"/>
        </q-tabs>
      </aside>
      <q-separator style="height: 3px" :dark="true" />
      <aside class="column q-pt-md">
        <div class="self-end">
          <p class="q-mr-md">© 2024 Airb&Car. Tous droits réservés</p>
          <p @click="$router.push('/condition-generale-utilisateur')" class="cursor-pointer">Condition Générale d'Utilisation</p>
        </div>
      </aside>
    </q-footer>

  </q-layout>

</template>

<style lang="sass">
body
  transition: background-color 0.3s ease-in-out

.q-header, .q-footer
  background-color: $negative !important


#search-bar
  position: absolute !important
  left: 50%
  transform: translateX(-50%)

.q-input
  width: 500px !important


</style>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@1,800&display=swap')

.oswald
  font-family: 'Oswald', sans-serif

.volkorn
  font-family: 'Vollkorn', serif

.roundedClass
  border-radius: 10px !important

.q-tab__label
  font-weight: 600 !important

.fa
  padding: 20px
  font-size: 30px
  width: 50px
  text-align: center
  text-decoration: none
  color: white

.fa:hover
  opacity: 0.8

</style>

