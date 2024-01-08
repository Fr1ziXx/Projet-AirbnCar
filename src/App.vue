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
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-img width="60px" src="picture/Logo.png" @click="$router.push('/')" />
        <q-toolbar-title>Airb&Car</q-toolbar-title>

        <q-tabs style="height: 60px">
          <q-route-tab name="vehicule" label="Vehicule" to="/vehicule" class="text-italic" />
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
          <q-route-tab name="vehicule" label="Vehicule" to="/vehicule" class="text-italic" />
          <q-route-tab name="apropos" label="A Propos" to="" class="text-italic" />
          <q-route-tab name="connecter" label="Se connecter" to="/connection" class="text-italic" />
        </q-tabs>
      </aside>
      <q-separator style="height: 3px" :dark="true" />
      <aside class="column q-pa-md">
        <div class="self-end">
          <p class="q-mr-md">© 2024 Airb&Car. Tous droits réservés</p>
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
</style>

