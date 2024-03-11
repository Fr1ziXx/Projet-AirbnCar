import { defineStore } from 'pinia'

export const car_store = defineStore('car', {
  state: () => ({
    carList: [
      {
        name: 'Cadillac Escalade',
        accroche: 'Le 4x4 nouvelle génération',
        prix: '375€/jour',
        img: 'cadillac/cadillac.jpg',
        img_detoure: 'cadillac/cadillac_retoucher.png',
        desc_offre: 'Le Cadillac Escalade est un des véhicules les plus célèbres de la marque' +
          ' américaine. Esthétique et confortable, ce 4x4 de plus de 400 chevaux vous dévoilera' +
          ' sa vitesse combinée au luxe pour une expérience unique. Son V8 ne vous laissera pas' +
          ' indifférent et son confort vous permettra de passer un agréable moment.',
        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: 'Location Cadillac Escalade',
        titre2: 'Louez l\'Exclusivité : Cadillac Escalade 2015 - Votre Expérience de Conduite Sans Limite',

        text: [
          {
            txt: 'Plongez dans l\'essence même du luxe automobile avec le Cadillac' +
              ' Escalade 2010.Symbole d\'élégance et de prestige depuis des années,' +
              ' ce modèle emblématique continue de séduire par son style distinctif' +
              '            et ses performances inégalées.',
            index: '1'
          },
          {
            txt: 'Au cœur de cette bête de route réside un moteur V8, synonyme de puissance et de performance. Chaque' +
              ' accélération est une expérience exaltante, propulsant le Cadillac Escalade 2010 avec une vigueur' +
              ' impressionnante, vous offrant un contrôle absolu sur la route.',
            index: '2'
          },
          {
            txt: 'Pour ceux qui désirent explorer les routes sans contraintes, le Cadillac Escalade 2010 est disponible' +
              ' à la location sans chauffeur. Profitez de la liberté de partir à l\'aventure à votre rythme, en toute ' +
              'intimité, tout en profitant du confort luxueux qu\'offre ce SUV légendaire.\n',
            index: '3'
          },
          {
            txt: 'Doté de sept places, ce modèle spacieux vous permet d\'embarquer toute votre famille ou vos amis pour des' +
              ' escapades mémorables. Que ce soit pour une virée en ville ou une traversée sur les routes escarpées, le ' +
              'Cadillac Escalade 2010 répondra à tous vos besoins avec style et raffinement.\n',
            index: '4'
          },
          {
            txt: 'Réservez dès maintenant votre Cadillac Escalade 2010 et préparez-vous à vivre une expérience de conduite ' +
              'inégalée. Laissez-vous séduire par le charme intemporel de ce véhicule légendaire, et découvrez une nouvelle' +
              ' dimension de luxe et de liberté sur la route.',
            index: '5'
          }],


        marque: 'Cadillac',
        modele: 'Escalade',
        moteur: 'V8 6,3 L 420cv',
        place: '7 places',
        couleur: 'Blanc',

        carousel: [{ index: '1', image: 'cadillac/cadillac1.png' }, {
          index: '2',
          image: 'cadillac/cadillac4.jpg'
        }, { index: '3', image: 'cadillac/cadillac3.jpg' }, {
          index: '4',
          image: 'cadillac/cadillac5.jpg'
        }, { index: '5', image: 'cadillac/cadillac2.jpg' }, { index: '6', image: 'cadillac/cadillac6.jpg' }]

      },
      {
        name: 'Ford Mustang GT',
        accroche: '',
        prix: '375€/jour',
        img: 'mustang/mustang.png',
        img_detoure: 'mustang/mustang_retoucher.png',
        desc_offre: 'La Ford Mustang GT Pack V8 5.0 de 2014 est l\'incarnation ultime de la puissance ' +
          'américaine sur quatre roues. Avec son moteur V8 5.0 litres sous le capot, cette icône ' +
          'de l\'automobile offre une expérience inoubliable .Si vous recherchez une voiture qui ' +
          'allie la nostalgie du passé à la technologie moderne, la Ford Mustang GT Pack V8 5.0 de' +
          ' 2014 est le choix parfait.',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: 'Location Ford Mustang GT',
        titre2: 'Explorez l\'Adrénaline : Ford Mustang GT 2020 - La Puissance Entre Vos Mains',

        text: [
          {
            txt: 'Plongez dans l\'univers de la performance automobile avec la Ford Mustang GT'+
            '2020. Ce symbole de vitesse et de style incarne l\'esprit de la conduite sportive,' +
                ' offrant une expérience inégalée sur la route.',
            index: '1'
          },
          {
            txt: 'Au cœur de cette bête mécanique se trouve un moteur V8, propulsant' +
                ' la Mustang GT avec une puissance fulgurante. Doté du pack Shelby et ' +
                'délivrant une impressionnante puissance de 550 chevaux, chaque coup d\'accélérateur' +
                ' est une montée d\'adrénaline pure, vous permettant de dompter la route avec aisance.',
            index: '2'
          },
          {
            txt: 'Conçue pour les amateurs de conduite authentique, cette Mustang est équipée d\'une' +
                ' boîte de vitesses manuelle, vous offrant un contrôle total sur chaque changement de ' +
                'vitesse. Chaque virage devient une danse harmonieuse entre l\'homme et la machine, ' +
                'faisant de chaque trajet une expérience passionnante.',
            index: '3'
          },
          {
            txt: 'Avec ses quatre places, la Ford Mustang GT 2020 vous permet d\'embarquer vos proches' +
                ' pour des aventures inoubliables. Que ce soit pour une virée en ville ou une escapade ' +
                'sur les routes sinueuses, cette voiture sportive répondra à toutes vos attentes avec sa' +
                ' silhouette grise élégante agrémentée de bandes noires distinctives.',
            index: '4'
          },
          {
            txt: 'Réservez dès maintenant votre Ford Mustang GT 2020 et préparez-vous à vivre des moments palpitants sur la' +
                ' route. Plongez dans l\'univers de la conduite sportive et laissez-vous séduire par le charme intemporel de' +
                ' cette légende automobile.',
            index: '5'
          }],

        marque: 'Ford',
        modele: 'Mustang GT',
        moteur: 'V8 5,0 L 421cv',
        place: '4 places',
        couleur: 'Noir et gris'
      },
      {
        name: 'Porsche boxster 986',
        accroche: '',
        prix: '277€/jour',
        img: 'porsche/porsche.png',
        img_detoure: 'porsche/porsche_retoucher.png',
        desc_offre: 'Notre Porsche 986 vous dévoileras luxe et performance. Ce bijou allemand de' +
          ' 210 chevaux incarne l\'élégance intemporelle et la sportivité. Prêt à transformer' +
          ' votre événement en un moment inoubliable grâce à ce sublime cabriolet gris ?',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: '',
        text1: '',
        titre2: '',
        text2: '',

        marque: 'Porsche',
        modele: 'Boxster 986',
        moteur: 'Flat 6 2,7 L 210cv',
        place: '2 places',
        couleur: 'Gris'
      },
      {
        name: 'Volkswagen New Beetle',
        accroche: '',
        prix: '100€/jour',
        img: 'newBeatle/newBeatle.png',
        img_detoure: 'newBeatle/newBeatle_retoucher.png',
        desc_offre: 'La sublime New Beetle cabriolet de chez Volkswagen vous permettra de sillonner' +
          ' les routes de la région. Ce véhicule vous offrira le plaisir du cabriolet lors des ' +
          'journées les plus ensoleillées. Son moteur diesel de 105 chevaux vous permettra de' +
          ' faire des trajets économiques et dynamiques.',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: '',
        text1: '',
        titre2: '',
        text2: '',

        marque: 'Volskswagen',
        modele: 'New Beatle',
        moteur: '4 en ligne 1,9 L 90cv',
        place: '4 places',
        couleur: 'Marron'
      },
      {
        name: ' Limousine Lincoln Towncar',
        accroche: '',
        prix: '400€/jour',
        img: 'limo/limo.png',
        img_detoure: 'limo/limo_retoucher.png',
        desc_offre: 'Cette incroyable limousine Lincoln de plus de 8 mètres vous accompagnera' +
          ' pour vos événements. 8 places passagers confortables, un intérieur cuir et un ' +
          'minibar luxueux sont présents dans le véhicule. Son moteur V8 saura vous transporter' +
          ' n\'importe où.',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: '',
        text1: '',
        titre2: '',
        text2: '',

        marque: 'Lincoln',
        modele: 'Towncar',
        moteur: 'V8 4,6 L 224cv',
        place: '9 places',
        couleur: 'blanc'
      }

    ],
    homeList: [{ index: '1', image: 'cadillac/cadillac1.png' }, { index: '2', image: 'mustang/mustang.png' },
      { index: '3', image: 'porsche/porsche.png' }, { index: '4', image: 'newBeatle/newBeatle.png' }, {
        index: '5',
        image: 'limo/limo.png'
      }]


  })
})