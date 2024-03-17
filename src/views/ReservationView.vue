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




  





