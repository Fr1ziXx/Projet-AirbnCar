<template>
  <section class="row justify-center">
    <q-card class="q-pa-sm q-pb-xl container col-10 volkorn text-center text-white">
      <h2 style="text-decoration: underline; font-style: italic">Réservation :</h2>
      <form @submit.prevent="enregistrer">
        <h6 class="volkorn">Modèle : {{ car.name }}</h6>
        <h6 class="volkorn">Prix par jour : {{ car.prix }}</h6>
        <div class="row justify-center">
          <h6 class="volkorn q-pr-md">Période de location :</h6>
          <q-btn icon="event" round color="primary" class="q-mt-xl">
            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date v-model="model" range />
            </q-popup-proxy>
          </q-btn>
        </div>
        <h6 class="volkorn">Date de début : {{ model.from }}</h6>
        <h6 class="volkorn">Date de fin : {{ model.to }}</h6>
        <h6 class="volkorn">Prix total : </h6>
        <!-- Ajout des champs du formulaire avec v-model -->
        <input type="hidden" v-model="modele">
        <input type="hidden" v-model="Ddebut">
        <input type="hidden" v-model="Dfin">
        <div class="row justify-center q-pt-xl">
          <!-- Correction: Ajout de l'attribut 'type="submit"' sur le bouton -->
          <q-btn rounded push text-color="white" class="volkorn btn-reserv col-6" type="submit" label="Je réserve" style="font-size: 2.5em; background-color: #190d0d" />
        </div>
      </form>
    </q-card>
  </section>
</template>

<script>
import axios from 'axios';
import { car_store } from '@/stores/car_store';
import { ref } from 'vue';

export default {
  data() {
    return {
      model: ref({ from: '2020/07/08', to: '2020/07/17' }),
      car: null,
      store: car_store(),
      modele: '',
      Ddebut: '',
      Dfin: ''
    };
  },
  created() {
    this.init(this.$route.params.IDvoiture);
  },
  methods: {
    init(ID) {
      this.car = this.store.carList[ID];
      window.scrollTo({ top: 0 });
    },
    enregistrer() {
      const formData = {
        modele: this.car.name, // Utilisation de this.car.name pour le modèle
        Ddebut: this.model.from, // Utilisation de this.model.from pour la date de début
        Dfin: this.model.to // Utilisation de this.model.to pour la date de fin
      };

      axios.post('reservation2.php', formData)
        .then(response => {
          console.log(response.data);
          // Traiter la réponse si nécessaire
        })
        .catch(error => {
          console.error(error);
          // Traiter l'erreur si nécessaire
        });
    }
  }
};
</script>

<style scoped lang="sass">
.container
  background-color: $negative !important
  border-radius: 7px
  margin-top: 100px
  min-height: 300px

h6
  margin-bottom: -30px
</style>
