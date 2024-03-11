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
        titre1: 'Location Ford Mustang GT - Valenciennes',
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
            txt: 'Au cœur de cette bête de route réside un moteur V8, synonyme de puissance et de performance. Chaque ' +
                ' accélération est une expérience exaltante, propulsant le Cadillac Escalade 2010 avec une vigueur ' +
                ' impressionnante, vous offrant un contrôle absolu sur la route.\\n\'',
            index: '3'
          },
          {
            txt: 'Pour ceux qui désirent explorer les routes sans contraintes, le Cadillac Escalade 2010 est disponible' +
                ' à la location sans chauffeur. Profitez de la liberté de partir à l\'aventure à votre rythme, en toute ' +
                'intimité, tout en profitant du confort luxueux qu\'offre ce SUV légendaire.\n',
            index: '4'
          },
          {
            txt: 'Doté de sept places, ce modèle spacieux vous permet d\'embarquer toute votre famille ou vos amis pour des' +
                ' escapades mémorables. Que ce soit pour une virée en ville ou une traversée sur les routes escarpées, le ' +
                'Cadillac Escalade 2010 répondra à tous vos besoins avec style et raffinement.\n',
            index: '5'
          },
          {
            txt: 'Réservez dès maintenant votre Cadillac Escalade 2010 et préparez-vous à vivre une expérience de conduite ' +
                'inégalée. Laissez-vous séduire par le charme intemporel de ce véhicule légendaire, et découvrez une nouvelle' +
                ' dimension de luxe et de liberté sur la route.',
            index: '6'
          }],

        marque: 'Ford',
        modele: 'Mustang GT',
        moteur: 'V8 5,0 L 421cv',
        place: '4 places',
        couleur: 'Noir et gris',

        carousel: [
            {
              index: '1',
              image: 'mustang/mustang.png'
            },
          {
          index: '2',
          image: 'mustang/mustang-12.jpg'
        },
          {
            index: '3',
            image: 'mustang/mustang-7.jpg'
          },
          {
          index: '4',
          image: 'mustang/mustang-3.jpg'
        },
          {
            index: '5',
            image: 'mustang/mustang-2.jpg'
          }]
      },
      {
        name: 'Porsche boxster 986 - Valenciennes',
        accroche: '',
        prix: '277€/jour',
        img: 'porsche/porsche.png',
        img_detoure: 'porsche/porsche_retoucher.png',
        desc_offre: 'Notre Porsche 986 vous dévoileras luxe et performance. Ce bijou allemand de' +
          ' 210 chevaux incarne l\'élégance intemporelle et la sportivité. Prêt à transformer' +
          ' votre événement en un moment inoubliable grâce à ce sublime cabriolet gris ?',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: 'Location porsche boxster',
        titre2: 'Découvrez l\'Exaltation : Porsche Boxster 986 2002 - La Synthèse de la Performance et du Plaisir',

        text: [
          {
            txt: 'Plongez dans le monde de la conduite pure avec la Porsche Boxster 986 2002.' +
                ' Ce cabriolet emblématique incarne la quintessence du plaisir de conduire, ' +
                'offrant une expérience dynamique et enivrante à chaque instant.',
            index: '1'
          },
          {
            txt: 'Dotée d\'un moteur flat 6 de 210 chevaux, la Porsche Boxster 986 déploie une' +
                ' puissance impressionnante, vous propulsant sur l\'asphalte avec une agilité et ' +
                'une vivacité incomparables. Chaque accélération est une montée d\'adrénaline, ' +
                'vous permettant de ressentir la véritable essence de la conduite sportive.',
            index: '2'
          },
          {
            txt: 'Conçue pour les puristes, cette Porsche est équipée d\'une boîte automatique,' +
                ' assurant des changements de vitesses fluides et précis. Chaque virage devient une' +
                ' danse harmonieuse entre le conducteur et la route, vous offrant un contrôle absolu ' +
                'sur votre expérience de conduite.',
            index: '3'
          },
          {
            txt: 'Pour ceux qui désirent explorer les routes sans contraintes, le Cadillac Escalade 2010 est disponible' +
                ' à la location sans chauffeur. Profitez de la liberté de partir à l\'aventure à votre rythme, en toute ' +
                'intimité, tout en profitant du confort luxueux qu\'offre ce SUV légendaire.\n',
            index: '4'
          },
          {
            txt: 'Avec ses deux places, la Porsche Boxster 986 vous invite à partager des moments intimes ' +
                'au volant avec votre partenaire ou un ami proche. Que ce soit pour une balade décontractée ' +
                'le long de la côte ou une escapade sur les routes sinueuses, ce cabriolet vous promet des moments' +
                ' de plaisir inoubliables.',
            index: '5'
          },
          {
            txt: 'Réservez dès maintenant votre Porsche Boxster 986 2002 et embarquez pour une aventure sur' +
                ' la route. Laissez-vous séduire par le charme intemporel de cette voiture de sport emblématique ' +
                'et découvrez la fusion parfaite entre performance et plaisir de conduire.',
            index: '6'
          }],

        marque: 'Porsche',
        modele: 'Boxster 986',
        moteur: 'Flat 6 2,7 L 210cv',
        place: '2 places',
        couleur: 'Gris',

        carousel: [
          {
            index: '1',
            image: 'porsche/porsche.png'
          },
          {
            index: '2',
            image: 'porsche/boxster-14.jpg'
          },
          {
            index: '3',
            image: 'porsche/boxster-12.jpg'
          },
          {
            index: '4',
            image: 'porsche/boxster-8.jpg'
          },
          {
            index: '5',
            image: 'porsche/boxster-4.jpg'
          },
          {
            index: '6',
            image: 'porsche/boxster-5.jpg'
          }]
      },
      {
        name: 'Volkswagen New Beetle - Valenciennes',
        accroche: '',
        prix: '100€/jour',
        img: 'newBeatle/newBeatle.png',
        img_detoure: 'newBeatle/newBeatle_retoucher.png',
        desc_offre: 'La sublime New Beetle cabriolet de chez Volkswagen vous permettra de sillonner' +
          ' les routes de la région. Ce véhicule vous offrira le plaisir du cabriolet lors des ' +
          'journées les plus ensoleillées. Son moteur diesel de 105 chevaux vous permettra de' +
          ' faire des trajets économiques et dynamiques.',

        prevention: 'Nous vous rapellons que ces voitures sont en locations sans chauffeur.',
        titre1: 'Location Volskswagen New Beetle - Valenciennes',
        titre2: 'Vivez l\'Émotion : Volkswagen New Beetle Cabriolet 2010 - L\'Élégance et la Convivialité ',

        text: [
          {
            txt: 'Plongez dans l\'univers rétro-chic de la conduite décapotable avec la Volkswagen' +
                ' New Beetle Cabriolet 2010. Symbole d\'élégance et de convivialité, ce cabriolet' +
                ' emblématique vous invite à vivre des moments inoubliables sur la route.',
            index: '1'
          },
          {
            txt: 'Propulsée par le célèbre moteur 1.9L TDI, la Volkswagen New Beetle Cabriolet offre ' +
                'une combinaison parfaite entre performance et efficacité énergétique. Chaque trajet ' +
                'est une occasion de profiter de la conduite fluide et économique que seul un moteur ' +
                'diesel peut offrir.',
            index: '2'
          },
          {
            txt: 'Avec ses quatre places, ce cabriolet spacieux est idéal pour partager des aventures ' +
                ' avec vos proches. Que ce soit pour une escapade en ville ou une virée à la campagne,' +
                ' la Volkswagen New Beetle Cabriolet vous offre un confort exceptionnel et une expérience' +
                ' de conduite agréable à tous les passagers.',
            index: '3'
          },
          {
            txt: 'Dotée d\'une capote souple qui se déploie en quelques instants, cette voiture vous permet' +
                ' de profiter pleinement des joies de la conduite en plein air. Laissez-vous bercer par le vent' +
                ' et le soleil tout en admirant le paysage qui défile autour de vous.',
            index: '4'
          },
          {
            txt: 'Réservez dès maintenant votre Volkswagen New Beetle Cabriolet 2010 et préparez-vous ' +
                'à vivre des moments de pur bonheur sur la route. Découvrez la fusion parfaite entre le ' +
                'charme rétro et les technologies modernes, et laissez-vous séduire par l\'émotion que' +
                ' seul un cabriolet peut procurer.',
            index: '5'
          }],

        marque: 'Volskswagen',
        modele: 'New Beatle',
        moteur: '4 en ligne 1,9 L 90cv',
        place: '4 places',
        couleur: 'Marron',

        carousel: [
          {
            index: '1',
            image: 'newBeatle/newBeatle.png'
          },
          {
            index: '2',
            image: 'newBeatle/new-beetle22.jpg'
          },
          {
            index: '3',
            image: 'newBeatle/new-beetle18.jpg'
          },
          {
            index: '4',
            image: 'newBeatle/new-beetle15.jpg'
          },
          {
            index: '5',
            image: 'newBeatle/new-beetle8.jpg'
          }]
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
        titre1: 'Location limousine - Valenciennes',
        titre2: 'Luxe et Prestige : Lincoln Town Car Limousine - L\'Élégance Redéfinie',

        text: [
          {
            txt: 'Plongez dans le monde du luxe absolu avec la Lincoln Town Car Limousine. ' +
                'Cette icône de l\'élégance et du raffinement incarne le summum du prestige ' +
                'et du confort, offrant une expérience de voyage inoubliable à ses passagers.',
            index: '1'
          },
          {
            txt: 'Dotée d\'un puissant moteur V8, la Lincoln Town Car Limousine allie performance' +
                ' et sophistication. Chaque trajet est une ode à la puissance, avec une conduite ' +
                'souple et maîtrisée qui vous emmène en toute tranquillité vers votre destination.',
            index: '2'
          },
          {
            txt: 'À bord, le luxe atteint de nouveaux sommets. Avec ses neuf places, cette limousine ' +
                'spacieuse offre un espace généreux pour vous et vos invités. L\'intérieur somptueux ' +
                'en cuir assure un confort optimal, tandis que les équipements haut de gamme tels qu\'une ' +
                'télévision, un bar et des finitions impeccables ajoutent une touche de luxe à chaque ' +
                'instant passé à bord.',
            index: '3'
          },
          {
            txt: 'Que ce soit pour un mariage, un événement spécial ou une soirée entre amis, la ' +
                'Lincoln Town Car Limousine vous garantit un voyage mémorable. Laissez-vous choyer' +
                ' par le service attentif de notre chauffeur professionnel (ou non) pendant que vous vous détendez' +
                ' dans le luxe absolu de cette voiture d\'exception.',
            index: '3'
          },
          {
            txt: 'Réservez dès maintenant votre Lincoln Town Car Limousine et préparez-vous à vivre ' +
                'une expérience de voyage incomparable. Découvrez le mariage parfait entre le luxe, ' +
                'le confort et la performance, et laissez-vous transporter dans un monde où chaque détail' +
                ' est synonyme de prestige et d\'exclusivité.',
            index: '4'
          },
          ],

        marque: 'Lincoln',
        modele: 'Towncar',
        moteur: 'V8 4,6 L 224cv',
        place: '9 places',
        couleur: 'blanc',

        carousel: [
          {
            index: '1',
            image: 'limo/limo.png'
          },
          {
            index: '2',
            image: 'limo/limo-3.jpg'
          },
          {
            index: '3',
            image: 'limo/limo-7.jpg'
          },
          {
            index: '4',
            image: 'limo/limo-11.jpg'
          }]
      }

    ],
    homeList: [{ index: '1', image: 'cadillac/cadillac1.png' }, { index: '2', image: 'mustang/mustang.png' },
      { index: '3', image: 'porsche/porsche.png' }, { index: '4', image: 'newBeatle/newBeatle.png' }, {
        index: '5',
        image: 'limo/limo.png'
      }]


  })
})