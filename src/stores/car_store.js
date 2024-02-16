import { defineStore } from 'pinia'

export const car_store = defineStore('car', {
  state: () => ({
    carList: [
      {
        name: 'Cadillac Escalade',
        prix: '375€/jour',
        img: 'cadillac/cadillac.jpg',
        img_detoure:'cadillac/cadillac_retoucher.png',
        desc_offre: 'Le Cadillac Escalade est un des véhicules les plus célèbres de la marque' +
          ' américaine. Esthétique et confortable, ce 4x4 de plus de 400 chevaux vous dévoilera' +
          ' sa vitesse combinée au luxe pour une expérience unique. Son V8 ne vous laissera pas' +
          ' indifférent et son confort vous permettra de passer un agréable moment.',
        marque:'Cadillac',
        modele:"Escalade",
        moteur:'V8 6,3 L 420cv',
        place:'7 places',
        couleur:'Blanc',
        caroussel: [{index:'1',image:'cadillac/cadillac1.png'},{index:'2',image:'cadillac/cadillac2.png'},{index:'3',image:'cadillac/cadillac3.png'},{index:'4',image:'cadillac/cadillac4.png'}]

      },
      {
        name: 'Ford Mustang GT',
        prix: '375€/jour',
        img: 'mustang/mustang.png',
        img_detoure:'mustang/mustang_retoucher.png',
        desc_offre: 'La Ford Mustang GT Pack V8 5.0 de 2014 est l\'incarnation ultime de la puissance ' +
          'américaine sur quatre roues. Avec son moteur V8 5.0 litres sous le capot, cette icône ' +
          'de l\'automobile offre une expérience inoubliable .Si vous recherchez une voiture qui ' +
          'allie la nostalgie du passé à la technologie moderne, la Ford Mustang GT Pack V8 5.0 de' +
          ' 2014 est le choix parfait.',
        marque:'Ford',
        modele:"Mustang GT",
        moteur:'V8 5,0 L 421cv',
        place:'4 places',
        couleur:'Noir et gris',
      },
      {
        name: 'Porsche boxster 986',
        prix: '277€/jour',
        img: 'porsche/porsche.png',
        img_detoure:'porsche/porsche_retoucher.png',
        desc_offre: 'Notre Porsche 986 vous dévoileras luxe et performance. Ce bijou allemand de' +
          ' 210 chevaux incarne l\'élégance intemporelle et la sportivité. Prêt à transformer' +
          ' votre événement en un moment inoubliable grâce à ce sublime cabriolet gris ?',
        marque:'Porsche',
        modele:"Boxster 986",
        moteur:'Flat 6 2,7 L 210cv',
        place:'2 places',
        couleur:'Gris',
      },
      {
        name: 'Volkswagen New Beetle',
        prix: '100€/jour',
        img: 'newBeatle/newBeatle.png',
        img_detoure:'voiture1/voiture1p0.png',
        desc_offre: 'La sublime New Beetle cabriolet de chez Volkswagen vous permettra de sillonner' +
          ' les routes de la région. Ce véhicule vous offrira le plaisir du cabriolet lors des ' +
          'journées les plus ensoleillées. Son moteur diesel de 105 chevaux vous permettra de' +
          ' faire des trajets économiques et dynamiques.',
        marque:'Volskswagen',
        modele:"New Beatle",
        moteur:'4 en ligne 1,9 L 90cv',
        place:'4 places',
        couleur:'Marron',
      },
      {
        name: ' Limousine Lincoln Towncar',
        prix: '400€/jour',
        img: 'limo/limo.png',
        img_detoure:'limo/limo_retoucher.png',
        desc_offre: 'Cette incroyable limousine Lincoln de plus de 8 mètres vous accompagnera' +
          ' pour vos événements. 8 places passagers confortables, un intérieur cuir et un ' +
          'minibar luxueux sont présents dans le véhicule. Son moteur V8 saura vous transporter' +
          ' n\'importe où.',
        marque:'Lincoln',
        modele:"Towncar",
        moteur:'V8 4,6 L 224cv',
        place:'9 places',
        couleur:'blanc',
      }

    ]
  })
})