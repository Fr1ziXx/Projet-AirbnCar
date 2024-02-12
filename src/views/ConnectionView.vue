<script setup>

</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <section class="row justify-center">
    <q-card class="container col-5 q-px-lg text-center text-white">
      <h4>Connection</h4>
      <q-input v-model="text" :dense="dense" label="Email" label-color="white" :dark="true" class="inp-connection">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">mail</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="text" :dense="dense" label="Mot de Passe" label-color="white" type="password" :dark="true" class="inp-connection">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">lock</span>
          </q-avatar>
        </template>
      </q-input>
      <q-btn rounded color="white" text-color="black" label="Se connecter" type="submit" style="width: 200px; height: 50px; font-weight: bold;" class="q-mt-xl q-mb-md volkorn" to="/"/>
      <p>Pas encore de compte ? <b to="/inscription" @click="$router.push('/inscription')" style="cursor: grab">Inscrivez vous !</b></p>
    </q-card>
  </section>
</template>


<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 400px

.inp-connection
  width: 500px !important
  padding: 20px 0
</style>