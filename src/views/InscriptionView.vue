<script>
  import { useQuasar } from 'quasar'

  export default {
    data() {
      return {
        Nom:"",
        Prenom:"",
        Email:"",
        MotdePasse:"",
        CMotdePasse:""
      }
    },
    created() {
      window.scrollTo({top: 0});
    }
  }
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <section class="row justify-center">
    <q-card class="container col-5 q-px-lg text-center text-white flex-center column">
      <h4>Inscription</h4>
      <q-input v-model="Nom" :dense="dense" label="Nom" label-color="white" :dark="true" class="inp-inscription">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">Person</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="Prenom" :dense="dense" label="Prénom" label-color="white" :dark="true" class="inp-inscription">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">Person</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="Email" :dense="dense" label="Email" label-color="white" :dark="true" class="inp-inscription">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">mail</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="MotdePasse" :dense="dense" label="Mot de Passe" label-color="white" type="password" :dark="true" class="inp-inscription">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">lock</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="CMotdePasse" :dense="dense" label="Confirmation Mot de Passe" label-color="white" type="password" :dark="true" class="inp-inscription">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">lock</span>
          </q-avatar>
        </template>
      </q-input>
      <q-btn rounded color="white" text-color="black" label="S'inscrire" type="submit" style="width: 200px; height: 50px; font-weight: bold;" class="q-ma-xl volkorn" to="/"/>
    </q-card>
  </section>
</template>

<style scoped lang="sass">
.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 400px


.inp-inscription
  width: 500px !important
  padding: 20px 0
</style>