<script>
export default {
  data() {
    return {
      list: 'nom voiture1',
      carList: [
        {
          name: 'Cadillac Escalade',
          prix: '375€/jour',
          img: 'voiture1/voiture1p1.png',
          desc: 'Le Cadillac Escalade est un des véhicules les plus célèbres de la marque' +
            ' américaine. Esthétique et confortable, ce 4x4 de plus de 400 chevaux vous dévoilera' +
            ' sa vitesse combinée au luxe pour une expérience unique. Son V8 ne vous laissera pas' +
            ' indifférent et son confort vous permettra de passer un agréable moment.'
        },
        {
          name: 'Ford Mustang GT',
          prix: '375€/jour',
          img: 'voiture4.png',
          desc: 'La Ford Mustang GT Pack V8 5.0 de 2014 est l\'incarnation ultime de la puissance ' +
            'américaine sur quatre roues. Avec son moteur V8 5.0 litres sous le capot, cette icône ' +
            'de l\'automobile offre une expérience inoubliable .Si vous recherchez une voiture qui ' +
            'allie la nostalgie du passé à la technologie moderne, la Ford Mustang GT Pack V8 5.0 de' +
            ' 2014 est le choix parfait.'
        },
        {
          name: 'Porsche 986',
          prix: '277€/jour',
          img: 'voiture5.png',
          desc: 'Notre Porsche 986 vous dévoileras luxe et performance. Ce bijou allemand de' +
            ' 210 chevaux incarne l\'élégance intemporelle et la sportivité. Prêt à transformer' +
            ' votre événement en un moment inoubliable grâce à ce sublime cabriolet gris ?'
        },
        {
          name: 'Volkswagen New Beetle',
          prix: '100€/jour',
          img: 'voiture7.png',
          desc: 'La sublime New Beetle cabriolet de chez Volkswagen vous permettra de sillonner' +
            ' les routes de la région. Ce véhicule vous offrira le plaisir du cabriolet lors des ' +
            'journées les plus ensoleillées. Son moteur diesel de 105 chevaux vous permettra de' +
            ' faire des trajets économiques et dynamiques.'
        },
        {
          name: ' Limousine Lincoln Towncar',
          prix: '400€/jour',
          img: 'voiture9.png',
          desc: 'Cette incroyable limousine Lincoln de plus de 8 mètres vous accompagnera' +
            ' pour vos événements. 8 places passagers confortables, un intérieur cuir et un ' +
            'minibar luxueux sont présents dans le véhicule. Son moteur V8 saura vous transporter' +
            ' n\'importe où.'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="search-bar">
    <q-input v-model="search" rounded outlined label="Rechercher">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
  <section class="row justify-center">
    <q-card class="q-pa-lg q-pb-xl  container col-10">
      <q-card v-for="list in carList" :key="list.img" :name="list.name" @click="$router.push('/voiture')"
              class="container-item q-mb-lg row">
        <div class="col-4">
          <q-img :src="`picture/voiture/${list.img}`" no-spinner class="col-4 picture-item q-ml-md" />
        </div>
        <div class="col-8 text-contenair text-white">
          <h4 class="text-italic volkorn titre-voiture">{{ list.name }}</h4>
          <h5 class="prix-voiture">{{ list.prix }}</h5>
          <p class="des-voiture">{{ list.desc }}</p>
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