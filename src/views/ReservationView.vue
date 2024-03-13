<template>
  <section class="row justify-center">
    <q-card class="q-pa-sm q-pb-xl container col-10 volkorn text-center text-white">
      <!-- Votre contenu existant -->

      <div class="row justify-center q-pt-xl">
        <!-- Ajoutez un événement @click pour déclencher la méthode de réservation -->
        <q-btn rounded push text-color="white" class="volkorn btn-reserv col-6" type="submit" label="Je réserve" style="font-size: 2.5em; background-color: #190d0d" @click="submitReservation"/>
      </div>
    </q-card>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  setup() {
    // Utilisez Ref pour rendre les données réactives
    const model = Vue.ref({ from: '2020/07/08', to: '2020/07/17' });

    // Méthode pour envoyer la réservation au serveur
    const submitReservation = async () => {
      try {
        const response = await axios.post('reservation2.php', {
          from: model.value.from,
          to: model.value.to,
          // Ajoutez d'autres données du formulaire ici si nécessaire
        });
        console.log(response.data); // Affichez la réponse du serveur dans la console
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la réservation :', error);
      }
    };

    return {
      model,
      submitReservation
    };
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
