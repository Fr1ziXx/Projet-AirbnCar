<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <section class="row justify-center">
    <q-card class="container col-5 q-px-lg text-center text-white flex-center column">
      <h4>Inscription</h4>
      <form @submit.prevent="enregistrer" class="inp-inscription">
        <q-input v-model="Nom" dense id='nom' label="Nom" label-color="white" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">Person</span>
            </q-avatar>
          </template>
        </q-input>
        <q-input v-model="Prenom" dense label="Prénom" id="prenom" label-color="white" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">Person</span>
            </q-avatar>
          </template>
        </q-input>
        <q-input v-model="Email" dense label="Email" id="email" label-color="white" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">mail</span>
            </q-avatar>
          </template>
        </q-input>
        <q-input v-model="MotdePasse" dense id="mdp1" label="Mot de Passe" label-color="white" type="password" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">lock</span>
            </q-avatar>
          </template>
        </q-input>
        <q-input v-model="CMotdePasse" dense id="mdp2" label="Confirmation Mot de Passe" label-color="white" type="password" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">lock</span>
            </q-avatar>
          </template>
        </q-input>
        <q-input v-model="ville" dense id="ville" label="Ville" label-color="white" type="text" dark class="inp-inscription">
          <template v-slot:append>
            <q-avatar>
              <span class="material-symbols-outlined text-white">lock</span>
            </q-avatar>
          </template>
        </q-input>
        <q-btn rounded color="white" text-color="black" label="S'inscrire" type="submit" style="width: 200px; height: 50px; font-weight: bold;" class="q-ma-xl volkorn" />
      </form>
    </q-card>
  </section> 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Nom: '',
      Prenom: '',
      Email: '',
      MotdePasse: '',
      CMotdePasse: '',
      ville: ''
    };
  },
  methods: {
    enregistrer() {
      const formData = {
        Nom: this.Nom,
        Prenom: this.Prenom,
        Email: this.Email,
        MotdePasse: this.MotdePasse,
        CMotdePasse: this.CMotdePasse,
        ville: this.ville
      };

      axios.post('page_inscription.php', formData)
        .then(response => {
          console.log(response.data);
         
        })
        .catch(error => {
          console.error(error);
         
        });
    }
  }
};
</script>

<style scoped lang="sass">
.container
  background-color: $negative !important
  border-radius: 7px
  min-height: 400px

.inp-inscription
  width: 500px !important
  padding: 20px 0
</style>
