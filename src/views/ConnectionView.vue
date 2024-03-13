<script>
import axios from 'axios';

export default {
  data() {
    return {
      Email: "",
      MotdePasse: ""
    };
  },
  methods: {
    connecter() {
      const formData = {
        Email: this.Email,
        MotdePasse: this.MotdePasse
      };

      axios.post('conect.php', formData)
        .then(response => {
          console.log(response.data);
          
        })
        .catch(error => {
          console.error(error);
          
        });
    }
  },
  created() {
    window.scrollTo({ top: 0 });
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <section class="row justify-center">
    <q-card class="container col-5 q-px-lg text-center text-white column flex-center">
      <h4>Connexion</h4>
      <q-input v-model="Email" :dense="dense" label="Email" label-color="white" :dark="true" class="inp-connection">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">mail</span>
          </q-avatar>
        </template>
      </q-input>
      <q-input v-model="MotdePasse" :dense="dense" label="Mot de Passe" label-color="white" type="password" :dark="true" class="inp-connection">
        <template v-slot:append>
          <q-avatar>
            <span class="material-symbols-outlined text-white">lock</span>
          </q-avatar>
        </template>
      </q-input>
      <q-btn @click="connecter" rounded color="white" text-color="black" label="Se connecter" style="width: 200px; height: 50px; font-weight: bold;" class="q-mt-xl q-mb-md volkorn" />
      <p>Pas encore de compte ? <b @click="$router.push('/inscription')" class="cursor-pointer">Inscrivez vous !</b></p>
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
