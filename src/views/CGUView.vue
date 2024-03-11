<script>
export default {
  created() {
    this.init()
  },
  methods: {
    init() {
      window.scrollTo({ top: 0 })
    }
  }
}
</script>

<template>
  <section class="row justify-center">
    <q-card class="q-pa-lg q-pb-xl  container col-10 volkorn">
      <h2 class="volkorn text-italic text-center ">Conditions Générales d'Utilisation</h2>
      <h4 class="volkorn">Ce site est hébergé par :</h4>
      <p>
        Hostinger International Ltd, société privée à responsabilité limitée de Chypre, dont l'adresse est 61 Lordou
        Vironos str. 6023 Larnaca, Chypre
      </p>
      <h4>Conditions générales d'utilisation</h4>
      <h5>Art. 1 Conditions d'utilisation</h5>
      <p>
        Toute personne qui accède au site https://www.airbncar.fr (ci-après le « Site ») s'engage à respecter les
        présentes conditions
        générales d'utilisation, qui pourront pour certains services être complétées par des conditions particulières.
      </p>
      <p>
        AirBnCar se réserve le droit de modifier et de mettre à jour à tout moment l'accès au Site ainsi que les
        présentes conditions
        d'utilisation. Ces modifications et mises à jour s'imposent à l'utilisateur qui doit en conséquence se référer
        régulièrement à
        cette rubrique pour vérifier les Conditions Générales en vigueur
      </p>
      <h5>Art. 2 Données personnelles et autres données</h5>
      <p>
        2.1 Les données sont exclusivement destinées à AirBnCar, à ses filiales ou aux membres de son réseau commercial
        à des fins d’enquêtes,
        d’analyses, de communications institutionnelles, d’opérations relatives à la gestion clients ou, si vous en êtes
        d’accord, de propositions
        commerciales. Ces informations sont confidentielles et conservées par AirBnCar, ses filiales et les membres de
        son réseau commercial.
        Conformément à la loi « Informatique et Libertés » du 06/01/78, vous disposez d'un droit d'accès, de
        rectification et de suppression
        de ces données ainsi que d’un droit de vous opposer à ce que ces données fassent l'objet d'un traitement en nous
        contactant par courrier
        à l’adresse suivante : adresse airBnCar ou par e-mail à l’adresse adresse mail ariBnCar.
      </p>
      <p>
        Vos demandes devront être signées et accompagnées de la photocopie d’un titre d’identité portant la signature du
        titulaire.
        La demande devra préciser l’adresse à laquelle devra parvenir la réponse.
      </p>
      <p>
        Dans l’hypothèse où vous avez accepté dans nos formulaires de recevoir par email des informations et
        sollicitations commerciales
        émanant de notre société et de son réseau de magasins à l’enseigne de AirBnCar, vous aurez à tout moment la
        faculté de revenir
        sur cette décision, soit en cliquant sur le lien prévu à cet effet en bas des mails que vous recevez, soit en
        envoyant un mail avec
        pour objet « désabonnement » à l’adresse suivante : adresse mail airBnCar
      </p>
      <p>
        2.2 Conformément à l’article 6 de la Loi du 21 juin 2004 pour la confiance en l’économie numérique, l'hébergeur
        conservera vos
        données de connexion, couvertes par le secret professionnel et traitées dans le respect des dispositions légales
        en matière de d
        onnées personnelles.
      </p>
      <h5> Art. 3 Liens hypertextes</h5>
      <p>
        Si vous souhaitez mettre en place un lien hypertexte vers notre Site, vous devez en conséquence prendre contact
        avec le Responsable du Site.
        AirBnCar ne peut en aucun cas être tenue pour responsable du contenu des sites qui font l'objet d'un lien
        hypertexte à partir du présent Site.
      </p>
      <h5>Art. 4 Contenu du Site</h5>
      <p>
        LB Prestacar, l’hébergeur et, plus généralement, toute société contribuant à la conception, à la réalisation et
        à la mise en ligne de ce Site s’efforcent
        d’assurer l’exactitude et la mise à jour régulière des informations diffusées sur ce Site. AirBnCar et les
        prestataires précités se réservent le droit de
        corriger et modifier à tout moment le contenu du Site sans que leur responsabilité puisse être engagée de ce
        fait, LB Prestacar pouvant apporter à tout
        moment des améliorations et/ou changements au(x) produit(s) décrits sur ce Site.
      </p>
      <p>
        Les prix ou tarifs mentionnés dans nos pages sont des « prix maximum conseillés » à la date de la dernière mise
        à jour du Site.
        Ces prix peuvent connaître des variations selon les détaillants. Par ailleurs, ces prix maximum conseillés sont
        susceptibles
        d’évoluer périodiquement ou à l’occasion de l’évolution des collections de AirBnCar.
      </p>
      <h5>Art. 5 Droit applicable</h5>
      <p>
        Les présentes Conditions Générales d'utilisation sont soumises au droit interne français.
      </p>
    </q-card>
  </section>
</template>

<style scoped lang="sass">

.container
  background-color: $negative !important
  border-radius: 7px
  margin-top: 100px
  min-height: 300px

p, h4, h5, h2
  color: white

h4, h5
  text-decoration: underline
  font-style: italic

</style>