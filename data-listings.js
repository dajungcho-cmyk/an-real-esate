/* Shared listings data — injected into the DOM so both index and property pages can read it */
;(function () {
  const el = document.getElementById('listings-data')
  if (el) return // already present (index.html inlines it)
  const s = document.createElement('script')
  s.id   = 'listings-data'
  s.type = 'application/json'
  s.textContent = JSON.stringify({
  "listings": [
      {
            "slug": "gracia-garden",
            "title": "Exquisite Brand-New Garden Residence in Gràcia",
            "price": "€830,000",
            "ref": "AN-2026-001",
            "neighbourhood": "Gràcia, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 2,
            "baths": 2,
            "size": "94",
            "floor": "Ground",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/Imagen-01-logo-1.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/Imagen-01-logo-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/imagen-4-logo-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/imagen3-logo-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/Imagen-02-logo-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/gracia-garden/planell.jpg"
            ],
            "description": [
                  "Ground-floor residence currently undergoing a high-spec renovation in the heart of Gràcia, adjacent to Avenida Diagonal and the Jardinets de Gràcia. A rare opportunity to acquire a property of exceptional character in one of Barcelona's most sought-after neighbourhoods.",
                  "The residence features soaring ceilings, beautifully restored Volta Catalana brickwork, and a luminous 23 m² open-plan living, dining and kitchen area. The principal suite includes a generous dressing room and a 7.30 m² bathroom. A second bedroom and a fully independent multipurpose pavilion of 18.50 m² — pre-installed for a potential third bathroom — complete the layout.",
                  "The 45 m² Mediterranean garden provides a private outdoor sanctuary in the city, ideal for entertaining or simply enjoying the Barcelona climate year-round."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Ground-floor apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "94.50 m²"
                  },
                  {
                        "key": "Private garden",
                        "val": "45 m²"
                  },
                  {
                        "key": "Independent pavilion",
                        "val": "18.50 m²"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "2 suites"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "2"
                  },
                  {
                        "key": "Floor",
                        "val": "Ground floor"
                  },
                  {
                        "key": "Living / dining",
                        "val": "23 m² open-plan"
                  },
                  {
                        "key": "Condition",
                        "val": "New — under renovation"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-2026-001"
                  }
            ],
            "features": {
                  "Interior": [
                        "23 m² open-plan living & dining",
                        "2 suites with en-suite bathrooms",
                        "Principal suite with dressing room",
                        "7.30 m² master bathroom",
                        "Restored Volta Catalana brickwork",
                        "Soaring ceilings",
                        "High-spec renovation"
                  ],
                  "Outdoor": [
                        "45 m² Mediterranean garden",
                        "Independent 18.50 m² pavilion",
                        "Pre-installed for 3rd bathroom",
                        "Private outdoor space"
                  ]
            },
            "nearby": [
                  {
                        "name": "Jardinets de Gràcia",
                        "dist": "2 min walk"
                  },
                  {
                        "name": "Avenida Diagonal",
                        "dist": "1 min walk"
                  },
                  {
                        "name": "Gràcia Metro Station (L3)",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "25 min drive"
                  }
            ],
            "published": true,
            "translations": {
                  "es": {
                        "title": "Exquisita residencia con jardín a estrenar en Gràcia",
                        "description": [
                              "Residencia de planta baja actualmente en proceso de renovación de alta calidad en el corazón de Gràcia, junto a la Avenida Diagonal y los Jardinets de Gràcia. Una oportunidad única de adquirir una propiedad de carácter excepcional en uno de los barrios más cotizados de Barcelona.",
                              "La residencia cuenta con techos altos, ladrillos Volta Catalana bellamente restaurados y una luminosa sala de estar, comedor y cocina de planta abierta de 23 m². La suite principal incluye un generoso vestidor y un baño de 7,30 m². Un segundo dormitorio y un pabellón polivalente de 18,50 m² totalmente independiente, preinstalado para un potencial tercer baño, completan la distribución.",
                              "El jardín mediterráneo de 45 m² ofrece un santuario privado al aire libre en la ciudad, ideal para entretenerse o simplemente disfrutar del clima de Barcelona durante todo el año."
                        ]
                  },
                  "ca": {
                        "title": "Exquisita Residència Jardí a estrenar a Gràcia",
                        "description": [
                              "Habitatge de planta baixa en procés de reforma d'alt nivell al cor de Gràcia, a tocar de l'avinguda Diagonal i els Jardinets de Gràcia. Una rara oportunitat per adquirir una propietat de caràcter excepcional en un dels barris més cotitzats de Barcelona.",
                              "La residència compta amb sostres alts, maó de la Volta Catalana bellament restaurada i una lluminosa zona d'estar, menjador i cuina de planta oberta de 23 m². La suite principal inclou un ampli vestidor i un bany de 7,30 m². Un segon dormitori i un pavelló polivalent de 18,50 m² totalment independent —preinstal·lat per a un potencial tercer bany— completen la distribució.",
                              "El jardí mediterrani de 45 m² ofereix un santuari privat a l'aire lliure a la ciutat, ideal per entretenir o simplement gaudir del clima de Barcelona durant tot l'any."
                        ]
                  },
                  "fr": {
                        "title": "Exquise résidence de jardin flambant neuve à Gràcia",
                        "description": [
                              "Résidence au rez-de-chaussée en cours de rénovation de haute qualité au cœur de Gràcia, à côté de l'Avenida Diagonal et des Jardinets de Gràcia. Une opportunité rare d'acquérir une propriété de caractère exceptionnel dans l'un des quartiers les plus recherchés de Barcelone.",
                              "La résidence présente de hauts plafonds, des briques Volta Catalana magnifiquement restaurées et un lumineux coin salon, salle à manger et cuisine décloisonné de 23 m². La suite principale comprend un généreux dressing et une salle de bain de 7,30 m². Une deuxième chambre et un pavillon polyvalent entièrement indépendant de 18,50 m² — préinstallé pour une éventuelle troisième salle de bain — complètent l'aménagement.",
                              "Le jardin méditerranéen de 45 m² offre un sanctuaire extérieur privé dans la ville, idéal pour se divertir ou simplement profiter du climat de Barcelone toute l'année."
                        ]
                  },
                  "de": {
                        "title": "Exquisite brandneue Gartenresidenz in Gràcia",
                        "description": [
                              "Residenz im Erdgeschoss, die derzeit einer anspruchsvollen Renovierung im Herzen von Gràcia unterzogen wird, neben der Avenida Diagonal und den Jardinets de Gràcia. Eine seltene Gelegenheit, eine Immobilie mit außergewöhnlichem Charakter in einem der begehrtesten Viertel Barcelonas zu erwerben.",
                              "Die Residenz verfügt über hohe Decken, wunderschön restauriertes Volta-Catalana-Mauerwerk und einen hellen, 23 m² großen, offenen Wohn-, Ess- und Küchenbereich. Die Hauptsuite verfügt über ein großzügiges Ankleidezimmer und ein 7,30 m² großes Badezimmer. Ein zweites Schlafzimmer und ein völlig unabhängiger Mehrzweckpavillon von 18,50 m² – vorinstalliert für ein mögliches drittes Badezimmer – runden das Layout ab.",
                              "Der 45 m² große mediterrane Garten bietet einen privaten Zufluchtsort im Freien in der Stadt, ideal für Unterhaltung oder einfach das ganze Jahr über, um das Klima Barcelonas zu genießen."
                        ]
                  },
                  "it": {
                        "title": "Squisita nuovissima residenza con giardino a Gràcia",
                        "description": [
                              "Residenza al piano terra attualmente in fase di ristrutturazione di alto livello nel cuore di Gràcia, adiacente all'Avenida Diagonal e ai Jardinets de Gràcia. Una rara opportunità per acquisire una proprietà dal carattere eccezionale in uno dei quartieri più ricercati di Barcellona.",
                              "La residenza presenta alti soffitti, mattoni Volta Catalana splendidamente restaurati e una luminosa zona soggiorno, pranzo e cucina a pianta aperta di 23 m². La suite principale comprende un ampio spogliatoio e un bagno di 7,30 m². Completano il layout una seconda camera da letto e un padiglione polivalente di 18,50 mq completamente indipendente, predisposto per un eventuale terzo bagno.",
                              "Il giardino mediterraneo di 45 m² offre un santuario privato all'aperto in città, ideale per intrattenere o semplicemente godersi il clima di Barcellona tutto l'anno."
                        ]
                  },
                  "ru": {
                        "title": "Изысканная новая резиденция с садом в Грасиа",
                        "description": [
                              "Резиденция на первом этаже, в настоящее время подвергающаяся высококачественному ремонту, в самом сердце Грасиа, рядом с Авенида Диагональ и Садами Грасиа. Редкая возможность приобрести недвижимость исключительного характера в одном из самых востребованных районов Барселоны.",
                              "В резиденции есть высокие потолки, прекрасно отреставрированная кирпичная кладка Volta Catalana, а также светлая гостиная, столовая и кухня открытой планировки площадью 23 м². В главном люксе есть просторная гардеробная и ванная комната площадью 7,30 м². Вторая спальня и полностью независимый многофункциональный павильон площадью 18,50 м², предварительно установленный для потенциальной третьей ванной комнаты, завершают планировку.",
                              "Средиземноморский сад площадью 45 м² представляет собой частный уголок города под открытым небом, идеально подходящий для развлечений или просто наслаждения климатом Барселоны круглый год."
                        ]
                  }
            }
      },
      {
            "slug": "eixample-golden-square-rent",
            "title": "Refined Luxury in Barcelona's Golden Square",
            "price": "€7,700",
            "ref": "AN-46749",
            "neighbourhood": "Eixample, Barcelona",
            "type": "apartment",
            "status": "rent",
            "badge_type": "Apartment",
            "beds": 3,
            "baths": 3,
            "size": "145",
            "floor": "Principal",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_08-3.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_08-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_09-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404776/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_10-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_11-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_12-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_13-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_14-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_15-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_16-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_17-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404778/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_18-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_19-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_20-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_21-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_22-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_23-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_24-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404779/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_28-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404780/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_29-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404780/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_30-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_31-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_32-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_33-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_36-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_37-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_38-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404781/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_45-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404782/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_46-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404782/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_47-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404782/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_48-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404782/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_49-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404782/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_50-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404783/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_51-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404783/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_54-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404783/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_55-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404783/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_56-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404783/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_57-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_58-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_59-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_60-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_61-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_62-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404784/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_63-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_64-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_65-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/eixample-golden-square-rent/2026-02-24_Rambla_de_Catalunya_45_Ppal_2_Barcelona_66-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/eixample-golden-square-rent/IMG_9580-2-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/eixample-golden-square-rent/PHOTO-2025-01-20-15-19-23-1.jpg"
            ],
            "description": [
                  "Newly renovated principal-floor apartment on the prestigious Rambla de Catalunya, in the heart of Barcelona's Golden Square. A curated masterpiece blending period elegance with contemporary design.",
                  "Spacious living and dining room with characteristic Eixample balconies overlooking the boulevard, an independent fully equipped kitchen, three double bedrooms with bespoke built-in wardrobes, and three contemporary bathrooms.",
                  "Ducted air conditioning, central heating, high ceilings, solid wooden floors, and double glazing throughout. Available for temporary stays of 32 days to 11 months."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Principal-floor apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "145 m²"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "3 double (2 en suite)"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "3"
                  },
                  {
                        "key": "Floor",
                        "val": "Principal floor"
                  },
                  {
                        "key": "Condition",
                        "val": "Newly renovated"
                  },
                  {
                        "key": "Rental period",
                        "val": "32 days – 11 months"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-46749"
                  }
            ],
            "features": {
                  "Interior": [
                        "Spacious living & dining room",
                        "Eixample balconies",
                        "Fully equipped kitchen",
                        "3 double bedrooms",
                        "Bespoke built-in wardrobes",
                        "Solid wooden floors",
                        "High ceilings",
                        "Double glazing"
                  ],
                  "Climate": [
                        "Ducted air conditioning",
                        "Central heating"
                  ]
            },
            "nearby": [
                  {
                        "name": "Passeig de Gràcia",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "Casa Batlló",
                        "dist": "7 min walk"
                  },
                  {
                        "name": "Diagonal Metro (L3/L5)",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "20 min drive"
                  }
            ],
            "published": true,
            "translations": {
                  "es": {
                        "title": "Lujo refinado en la Plaza Dorada de Barcelona",
                        "description": [
                              "Apartamento recientemente renovado en el piso principal de la prestigiosa Rambla de Catalunya, en el corazón de la Plaza Dorada de Barcelona. Una obra maestra curada que combina la elegancia de la época con el diseño contemporáneo.",
                              "Amplio salón comedor con balcones característicos del Eixample con vistas al bulevar, cocina independiente totalmente equipada, tres habitaciones dobles con armarios empotrados a medida y tres baños contemporáneos.",
                              "Aire acondicionado por conductos, calefacción central, techos altos, suelos de madera maciza y doble acristalamiento en todas partes. Disponible para estancias temporales de 32 días a 11 meses."
                        ]
                  },
                  "ca": {
                        "title": "Luxe refinat a la Plaça Daurada de Barcelona",
                        "description": [
                              "Pis de planta principal recentment reformat a la prestigiosa Rambla de Catalunya, al cor de la Plaça Daurada de Barcelona. Una obra mestra curada que combina l'elegància d'època amb el disseny contemporani.",
                              "Ampli saló menjador amb balcons característics de l'Eixample amb vistes al bulevard, cuina independent totalment equipada, tres habitacions dobles amb armaris encastats a mida i tres banys contemporanis.",
                              "Aire condicionat per conductes, calefacció central, sostres alts, terres de fusta massissa i doble vidre a tot arreu. Disponible per a estades temporals de 32 dies a 11 mesos."
                        ]
                  },
                  "fr": {
                        "title": "Luxe raffiné dans le Carré d'Or de Barcelone",
                        "description": [
                              "Appartement récemment rénové au rez-de-chaussée de la prestigieuse Rambla de Catalunya, au cœur du Carré d'Or de Barcelone. Un chef-d’œuvre mêlant élégance d’époque et design contemporain.",
                              "Spacieux salon et salle à manger avec balcons caractéristiques de l'Eixample donnant sur le boulevard, une cuisine indépendante entièrement équipée, trois chambres doubles avec placards intégrés sur mesure et trois salles de bains contemporaines.",
                              "Climatisation canalisée, chauffage central, hauts plafonds, parquet en bois massif et double vitrage partout. Disponible pour des séjours temporaires de 32 jours à 11 mois."
                        ]
                  },
                  "de": {
                        "title": "Raffinierter Luxus am Goldenen Platz von Barcelona",
                        "description": [
                              "Neu renovierte Wohnung im Erdgeschoss an der prestigeträchtigen Rambla de Catalunya, im Herzen von Barcelonas Goldenem Platz. Ein kuratiertes Meisterwerk, das historische Eleganz mit zeitgenössischem Design verbindet.",
                              "Geräumiges Wohn- und Esszimmer mit charakteristischen Eixample-Balkonen mit Blick auf den Boulevard, einer unabhängigen, voll ausgestatteten Küche, drei Doppelzimmern mit maßgeschneiderten Einbauschränken und drei modernen Badezimmern.",
                              "Kanalklimaanlage, Zentralheizung, hohe Decken, Massivholzböden und Doppelverglasung im gesamten Gebäude. Verfügbar für vorübergehende Aufenthalte von 32 Tagen bis 11 Monaten."
                        ]
                  },
                  "it": {
                        "title": "Lusso raffinato nella Piazza d'Oro di Barcellona",
                        "description": [
                              "Appartamento recentemente ristrutturato al piano principale sulla prestigiosa Rambla de Catalunya, nel cuore della Piazza d'Oro di Barcellona. Un capolavoro curato che unisce l'eleganza dell'epoca al design contemporaneo.",
                              "Ampio soggiorno e sala da pranzo con caratteristici balconi dell'Eixample che si affacciano sul viale, una cucina indipendente completamente attrezzata, tre camere matrimoniali con armadi a muro su misura e tre bagni contemporanei.",
                              "Aria condizionata canalizzata, riscaldamento centralizzato, soffitti alti, pavimenti in legno massello e doppi vetri ovunque. Disponibile per soggiorni temporanei da 32 giorni a 11 mesi."
                        ]
                  },
                  "ru": {
                        "title": "Изысканная роскошь на Золотой площади Барселоны",
                        "description": [
                              "Недавно отремонтированная квартира на первом этаже на престижной улице Рамбла Каталонии, в самом сердце Золотой площади Барселоны. Созданный шедевр, сочетающий старинную элегантность с современным дизайном.",
                              "Просторная гостиная и столовая с характерными для Эшампле балконами с видом на бульвар, отдельная полностью оборудованная кухня, три спальни с двуспальными кроватями со встроенными шкафами на заказ и три современные ванные комнаты.",
                              "Канальное кондиционирование воздуха, центральное отопление, высокие потолки, массивные деревянные полы и двойное остекление повсюду. Доступно для временного пребывания от 32 дней до 11 месяцев."
                        ]
                  }
            }
      },
      {
            "slug": "sant-gervasi-galvany",
            "title": "Renovated Residence with Historic Charm in Sant Gervasi",
            "price": "€520,000",
            "ref": "AN-1012",
            "neighbourhood": "Sant Gervasi, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 2,
            "baths": 1,
            "size": "86",
            "floor": "Upper",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-2.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404785/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-4.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-8.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-9.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404786/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-10.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-11.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-42-12.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-2.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-3.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404787/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-4.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404788/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-5.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404788/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-6.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404788/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-7.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404788/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-8.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-43-9.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-44.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-24-13-29-41.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/sant-gervasi-galvany/IMG_9580-2-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/sant-gervasi-galvany/PHOTO-2025-01-20-15-19-23-1.jpg"
            ],
            "description": [
                  "Beautifully renovated apartment with historic charm in the coveted Sarrià-Sant Gervasi neighbourhood. Built in 1936, this spacious home combines period architectural elements with modern comforts.",
                  "The property features a 35 m² living-dining area with natural light through large windows, an integrated open-plan kitchen, two double bedrooms, a modern bathroom, and a private balcony. High ceilings with exposed Catalan vaulting add exceptional character.",
                  "Equipped with air conditioning, heating, security door, and wooden flooring throughout. One apartment per floor, providing exceptional privacy in a quiet residential street."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "86 m²"
                  },
                  {
                        "key": "Year built",
                        "val": "1936"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "2"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "1"
                  },
                  {
                        "key": "Living / dining",
                        "val": "35 m²"
                  },
                  {
                        "key": "Balcony",
                        "val": "Private"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-1012"
                  }
            ],
            "features": {
                  "Interior": [
                        "35 m² living-dining area",
                        "Open-plan kitchen",
                        "2 double bedrooms",
                        "Exposed Catalan vaulting",
                        "High ceilings",
                        "Wooden flooring",
                        "Private balcony"
                  ],
                  "Equipment": [
                        "Air conditioning",
                        "Heating",
                        "Security door",
                        "One apartment per floor"
                  ]
            },
            "nearby": [
                  {
                        "name": "Sarrià FGC Station",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "Mercat de Galvany",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "Diagonal Avenue",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "25 min drive"
                  }
            ],
            "published": true,
            "sold": true,
            "translations": {
                  "es": {
                        "title": "Residencia renovada con encanto histórico en Sant Gervasi",
                        "description": [
                              "Precioso apartamento reformado con encanto histórico en el codiciado barrio de Sarrià-Sant Gervasi. Construida en 1936, esta espaciosa casa combina elementos arquitectónicos de época con comodidades modernas.",
                              "La propiedad cuenta con un salón-comedor de 35 m² con luz natural a través de grandes ventanales, una cocina americana integrada, dos dormitorios dobles, un moderno baño y un balcón privado. Los techos altos con bóveda catalana vista añaden un carácter excepcional.",
                              "Equipado con aire acondicionado, calefacción, puerta blindada y suelos de tarima en toda la vivienda. Un apartamento por piso, brindando privacidad excepcional en una tranquila calle residencial."
                        ]
                  },
                  "ca": {
                        "title": "Residencia reformada amb encant històric a Sant Gervasi",
                        "description": [
                              "Preciós apartament reformat amb encant històric al cobejat barri de Sarrià-Sant Gervasi. Construïda l'any 1936, aquesta àmplia casa combina elements arquitectònics d'època amb comoditats modernes.",
                              "L'habitatge disposa d'una sala d'estar-menjador de 35 m² amb llum natural a través de grans finestrals, una cuina americana integrada, dues habitacions dobles, un bany modern i un balcó privat. Els sostres alts amb volta catalana a la vista aporten un caràcter excepcional.",
                              "Equipat amb aire condicionat, calefacció, porta de seguretat i terres de fusta a tot arreu. Un apartament per planta, que ofereix una intimitat excepcional en un carrer residencial tranquil."
                        ]
                  },
                  "fr": {
                        "title": "Résidence rénovée avec charme historique à Sant Gervasi",
                        "description": [
                              "Appartement magnifiquement rénové avec un charme historique dans le quartier convoité de Sarrià-Sant Gervasi. Construite en 1936, cette maison spacieuse allie des éléments architecturaux d'époque au confort moderne.",
                              "La propriété comprend un salon-salle à manger de 35 m² baigné de lumière naturelle grâce à de grandes fenêtres, une cuisine américaine intégrée, deux chambres doubles, une salle de bains moderne et un balcon privé. Les hauts plafonds et les voûtes catalanes apparentes ajoutent un caractère exceptionnel.",
                              "Equipé de climatisation, chauffage, porte blindée et parquet partout. Un appartement par étage, offrant une intimité exceptionnelle dans une rue résidentielle calme."
                        ]
                  },
                  "de": {
                        "title": "Renovierte Residenz mit historischem Charme in Sant Gervasi",
                        "description": [
                              "Wunderschön renovierte Wohnung mit historischem Charme im begehrten Viertel Sarrià-Sant Gervasi. Dieses geräumige Haus wurde 1936 erbaut und verbindet historische Architekturelemente mit modernem Komfort.",
                              "Die Immobilie verfügt über einen 35 m² großen Wohn-Essbereich mit Tageslicht durch große Fenster, eine integrierte offene Küche, zwei Doppelschlafzimmer, ein modernes Badezimmer und einen privaten Balkon. Hohe Decken mit freiliegenden katalanischen Gewölben sorgen für einen außergewöhnlichen Charakter.",
                              "Ausgestattet mit Klimaanlage, Heizung, Sicherheitstür und Holzböden im gesamten Gebäude. Eine Wohnung pro Etage, die außergewöhnliche Privatsphäre in einer ruhigen Wohnstraße bietet."
                        ]
                  },
                  "it": {
                        "title": "Residenza ristrutturata dal fascino storico a Sant Gervasi",
                        "description": [
                              "Appartamento splendidamente ristrutturato dal fascino storico nell'ambito quartiere Sarrià-Sant Gervasi. Costruita nel 1936, questa spaziosa casa combina elementi architettonici d'epoca con comfort moderni.",
                              "La struttura dispone di una zona soggiorno-pranzo di 35 m² con luce naturale attraverso ampie finestre, una cucina a pianta aperta integrata, due camere matrimoniali, un bagno moderno e un balcone privato. Gli alti soffitti con volte catalane a vista aggiungono carattere eccezionale.",
                              "Dotato di aria condizionata, riscaldamento, porta blindata e pavimento in legno ovunque. Un appartamento per piano, che garantisce eccezionale privacy in una tranquilla strada residenziale."
                        ]
                  },
                  "ru": {
                        "title": "Отремонтированная резиденция с историческим шармом в Сан-Жерваси",
                        "description": [
                              "Красиво отремонтированная квартира с историческим шармом в престижном районе Саррия-Сан-Жерваси. Этот просторный дом, построенный в 1936 году, сочетает в себе элементы старинной архитектуры и современные удобства.",
                              "В доме есть гостиная-столовая площадью 35 м² с естественным освещением через большие окна, встроенная кухня открытой планировки, две спальни с двуспальными кроватями, современная ванная комната и собственный балкон. Высокие потолки с открытыми каталонскими сводами придают помещению исключительный характер.",
                              "Оснащен кондиционером, отоплением, бронированной дверью и деревянным полом. Одна квартира на этаже, обеспечивающая исключительную конфиденциальность на тихой жилой улице."
                        ]
                  }
            }
      },
      {
            "slug": "el-born-corner",
            "title": "Sunny 4-Bedroom Corner Apartment in Historic El Born",
            "price": "€1,095,000",
            "ref": "AN-46330",
            "neighbourhood": "El Born, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 4,
            "baths": 3,
            "size": "144",
            "floor": "Upper",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/el-born-corner/PHOTO-2025-01-20-15-19-11-1.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/el-born-corner/PHOTO-2025-01-20-15-19-11-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404789/an-realestate/el-born-corner/PHOTO-2025-01-20-15-18-45-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/el-born-corner/PHOTO-2025-01-20-15-19-23-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/el-born-corner/PHOTO-2025-01-20-15-18-59-1.jpg"
            ],
            "description": [
                  "Corner apartment in a beautifully restored historic building in El Born, one of Barcelona's most vibrant and culturally rich neighbourhoods. Fully renovated turn-key project.",
                  "Three spacious double bedrooms with views over the plaza and street, a single bedroom with walk-in closet and patio access, three designer bathrooms with brushed gold fixtures, and a chef's kitchen with lacquered cabinetry and Bosch appliances.",
                  "Original coffered ceilings and herringbone wood flooring throughout. Samsung air conditioning and radiant floor heating ensure year-round comfort."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Corner apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "144 m²"
                  },
                  {
                        "key": "Year built",
                        "val": "1881"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "4"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "3"
                  },
                  {
                        "key": "Condition",
                        "val": "Turn-key renovation"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-46330"
                  }
            ],
            "features": {
                  "Interior": [
                        "Original coffered ceilings",
                        "Herringbone wood flooring",
                        "3 double bedrooms",
                        "Walk-in closet",
                        "Chef's kitchen with Bosch appliances",
                        "3 designer bathrooms",
                        "Brushed gold fixtures"
                  ],
                  "Climate": [
                        "Samsung air conditioning",
                        "Radiant floor heating"
                  ]
            },
            "nearby": [
                  {
                        "name": "Basílica de Santa Maria del Mar",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "Passeig del Born",
                        "dist": "2 min walk"
                  },
                  {
                        "name": "Arc de Triomf",
                        "dist": "8 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "20 min drive"
                  }
            ],
            "published": true,
            "sold": true,
            "translations": {
                  "es": {
                        "title": "Soleado apartamento esquinero de 4 dormitorios en el histórico El Born",
                        "description": [
                              "Apartamento de esquina en un edificio histórico bellamente restaurado en El Born, uno de los barrios más vibrantes y culturalmente ricos de Barcelona. Proyecto llave en mano totalmente reformado.",
                              "Tres amplios dormitorios dobles con vistas a la plaza y a la calle, un dormitorio individual con vestidor y acceso al patio, tres baños de diseño con accesorios de oro pulido y una cocina de chef con gabinetes lacados y electrodomésticos Bosch.",
                              "Techos artesonados originales y suelos de madera en espiga en todas partes. El aire acondicionado Samsung y la calefacción por suelo radiante garantizan comodidad durante todo el año."
                        ]
                  },
                  "ca": {
                        "title": "Assolellat apartament cantoner de 4 habitacions al Born històric",
                        "description": [
                              "Apartament cantoner en un edifici històric magníficament restaurat al Born, un dels barris més vibrants i culturalment rics de Barcelona. Projecte clau en mà totalment reformat.",
                              "Tres habitacions dobles espaioses amb vistes a la plaça i al carrer, una habitació individual amb vestidor i accés al pati, tres banys de disseny amb accessoris daurats raspallats i una cuina de xef amb mobles lacats i electrodomèstics Bosch.",
                              "Sostres artesonats originals i terres de fusta d'espina de peix a tot arreu. L'aire condicionat Samsung i la calefacció per terra radiant garanteixen comoditat durant tot l'any."
                        ]
                  },
                  "fr": {
                        "title": "Appartement d'angle ensoleillé de 4 chambres dans le quartier historique d'El Born",
                        "description": [
                              "Appartement d'angle dans un bâtiment historique magnifiquement restauré à El Born, l'un des quartiers les plus animés et culturellement riches de Barcelone. Projet clé en main entièrement rénové.",
                              "Trois chambres doubles spacieuses avec vue sur la place et la rue, une chambre simple avec dressing et accès au patio, trois salles de bains design avec luminaires en or brossé et une cuisine de chef avec armoires laquées et appareils Bosch.",
                              "Plafonds à caissons d'origine et parquet à chevrons partout. La climatisation Samsung et le chauffage radiant au sol assurent un confort toute l'année."
                        ]
                  },
                  "de": {
                        "title": "Sonniges Eckapartment mit 4 Schlafzimmern im historischen El Born",
                        "description": [
                              "Eckwohnung in einem wunderschön restaurierten historischen Gebäude in El Born, einem der lebendigsten und kulturell reichsten Viertel Barcelonas. Komplett renoviertes, schlüsselfertiges Projekt.",
                              "Drei geräumige Doppelzimmer mit Blick auf den Platz und die Straße, ein Einzelzimmer mit begehbarem Kleiderschrank und Zugang zur Terrasse, drei Designer-Badezimmer mit Armaturen aus gebürstetem Gold und eine Kochküche mit lackierten Schränken und Bosch-Geräten.",
                              "Originale Kassettendecken und überall Fischgrätenholzböden. Die Samsung-Klimaanlage und die Fußbodenheizung sorgen das ganze Jahr über für Komfort."
                        ]
                  },
                  "it": {
                        "title": "Soleggiato appartamento ad angolo con 4 camere da letto nel centro storico di El Born",
                        "description": [
                              "Appartamento d'angolo in un edificio storico splendidamente restaurato a El Born, uno dei quartieri più vivaci e culturalmente ricchi di Barcellona. Progetto chiavi in ​​mano completamente ristrutturato.",
                              "Tre ampie camere matrimoniali con vista sulla piazza e sulla strada, una camera singola con cabina armadio e accesso al patio, tre bagni di design con infissi in oro spazzolato e una cucina dello chef con mobili laccati ed elettrodomestici Bosch.",
                              "Soffitti a cassettoni originali e pavimenti in legno a spina di pesce ovunque. L'aria condizionata Samsung e il riscaldamento a pavimento radiante garantiscono comfort tutto l'anno."
                        ]
                  },
                  "ru": {
                        "title": "Солнечная угловая квартира с 4 спальнями в историческом районе Эль Борн",
                        "description": [
                              "Угловая квартира в прекрасно отреставрированном историческом здании в Эль Борне, одном из самых ярких и культурно богатых районов Барселоны. Полностью отремонтированный проект под ключ.",
                              "Три просторные спальни с двуспальными кроватями с видом на площадь и улицу, спальня с односпальной кроватью с гардеробной и выходом во внутренний дворик, три дизайнерские ванные комнаты с матовой золотой сантехникой и кухня шеф-повара с лакированной мебелью и бытовой техникой Bosch.",
                              "Оригинальные кессонные потолки и деревянный пол в елочку. Кондиционер Samsung и полы с подогревом обеспечивают комфорт круглый год."
                        ]
                  }
            }
      },
      {
            "slug": "rambla-catalunya-corner",
            "title": "Stunning Refurbished Corner Apartment on Rambla de Catalunya",
            "price": "€1,395,000",
            "ref": "AN-10007",
            "neighbourhood": "Eixample, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 3,
            "baths": 3,
            "size": "150",
            "floor": "Upper",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_01_Imagen_0001-scaled.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_01_Imagen_0001-scaled.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_24_Imagen_0001-scaled.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404790/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_18_Imagen_0001-scaled.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404791/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_17_Imagen_0001-scaled.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404791/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_07_Imagen_0001-scaled.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404791/an-realestate/rambla-catalunya-corner/RAMBLA_CATALUNYA-2_Pagina_05_Imagen_0001-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404791/an-realestate/rambla-catalunya-corner/Captura-de-pantalla-2024-10-13-a-las-14.00.30.png"
            ],
            "description": [
                  "Stunning refurbished corner apartment on the iconic Rambla de Catalunya, in the heart of Barcelona's prestigious Golden Square. A rare combination of modernist architecture and contemporary luxury.",
                  "High ceilings with original mouldings, marble and wooden flooring, a private balcony, alarm system, and three generous bedrooms each with en-suite bathrooms. Located in an elegant period building with elevator and concierge service.",
                  "Energy class C. All of Barcelona's finest destinations within walking distance: Passeig de Gràcia, La Pedrera, Casa Batlló, and the city's best restaurants and boutiques."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Corner apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "150 m²"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "3"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "3"
                  },
                  {
                        "key": "Energy class",
                        "val": "C"
                  },
                  {
                        "key": "Building services",
                        "val": "Elevator, concierge"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-10007"
                  }
            ],
            "features": {
                  "Interior": [
                        "High ceilings with original mouldings",
                        "Marble flooring",
                        "Wooden flooring",
                        "Private balcony",
                        "Alarm system",
                        "Air conditioning"
                  ],
                  "Building": [
                        "Elevator",
                        "Concierge service",
                        "Modernist building"
                  ]
            },
            "nearby": [
                  {
                        "name": "Passeig de Gràcia",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "Casa Batlló",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "La Pedrera",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "20 min drive"
                  }
            ],
            "published": true,
            "sold": true,
            "translations": {
                  "es": {
                        "title": "Impresionante apartamento reformado en esquina en Rambla de Catalunya",
                        "description": [
                              "Impresionante apartamento reformado en esquina en la emblemática Rambla de Catalunya, en el corazón de la prestigiosa Plaza Dorada de Barcelona. Una rara combinación de arquitectura modernista y lujo contemporáneo.",
                              "Techos altos con molduras originales, suelos de mármol y madera, balcón privado, sistema de alarma y tres amplios dormitorios, cada uno con baño en suite. Ubicado en una elegante finca de época con ascensor y servicio de conserjería.",
                              "Clase energética C. Todos los mejores destinos de Barcelona a poca distancia: Passeig de Gràcia, La Pedrera, Casa Batlló y los mejores restaurantes y boutiques de la ciudad."
                        ]
                  },
                  "ca": {
                        "title": "Impressionant pis cantoner reformat a la Rambla de Catalunya",
                        "description": [
                              "Impressionant apartament cantoner reformat a l'emblemàtica Rambla de Catalunya, al cor de la prestigiosa Plaça Daurada de Barcelona. Una rara combinació d'arquitectura modernista i luxe contemporani.",
                              "Sostres alts amb motllures originals, terres de marbre i fusta, balcó privat, sistema d'alarma i tres habitacions generoses cadascuna amb bany privat. Situat en un elegant edifici d'època amb ascensor i servei de consergeria.",
                              "Classe energètica C. Totes les millors destinacions de Barcelona a poca distància: Passeig de Gràcia, La Pedrera, Casa Batlló i els millors restaurants i botigues de la ciutat."
                        ]
                  },
                  "fr": {
                        "title": "Superbe appartement d'angle rénové sur la Rambla de Catalunya",
                        "description": [
                              "Superbe appartement d'angle rénové sur l'emblématique Rambla de Catalunya, au cœur du prestigieux Carré d'Or de Barcelone. Une combinaison rare d'architecture moderniste et de luxe contemporain.",
                              "Hauts plafonds avec moulures d'origine, parquet en marbre et bois, balcon privé, système d'alarme et trois chambres généreuses chacune avec salle de bains privative. Situé dans un élégant immeuble d'époque avec ascenseur et service de conciergerie.",
                              "Classe énergétique C. Toutes les plus belles destinations de Barcelone accessibles à pied : Passeig de Gràcia, La Pedrera, Casa Batlló et les meilleurs restaurants et boutiques de la ville."
                        ]
                  },
                  "de": {
                        "title": "Atemberaubende renovierte Eckwohnung an der Rambla de Catalunya",
                        "description": [
                              "Atemberaubende renovierte Eckwohnung an der berühmten Rambla de Catalunya, im Herzen von Barcelonas prestigeträchtigem Goldenen Platz. Eine seltene Kombination aus modernistischer Architektur und zeitgenössischem Luxus.",
                              "Hohe Decken mit Originalleisten, Marmor- und Holzböden, ein privater Balkon, Alarmanlage und drei großzügige Schlafzimmer mit jeweils eigenem Bad. Befindet sich in einem eleganten historischen Gebäude mit Aufzug und Concierge-Service.",
                              "Energieklasse C. Alle schönsten Reiseziele Barcelonas zu Fuß erreichbar: Passeig de Gràcia, La Pedrera, Casa Batlló und die besten Restaurants und Boutiquen der Stadt."
                        ]
                  },
                  "it": {
                        "title": "Splendido appartamento d'angolo ristrutturato sulla Rambla de Catalunya",
                        "description": [
                              "Splendido appartamento d'angolo ristrutturato sull'iconica Rambla de Catalunya, nel cuore della prestigiosa Piazza d'Oro di Barcellona. Una rara combinazione di architettura modernista e lusso contemporaneo.",
                              "Soffitti alti con modanature originali, pavimenti in marmo e legno, balcone privato, sistema di allarme e tre ampie camere da letto ciascuna con bagno privato. Situato in un elegante palazzo d'epoca con ascensore e servizio di portineria.",
                              "Classe energetica C. Tutte le più belle destinazioni di Barcellona raggiungibili a piedi: Passeig de Gràcia, La Pedrera, Casa Batlló e i migliori ristoranti e boutique della città."
                        ]
                  },
                  "ru": {
                        "title": "Потрясающая отремонтированная угловая квартира на Рамбла де Каталония",
                        "description": [
                              "Потрясающая отремонтированная угловая квартира на знаменитой улице Рамбла Каталонии, в самом сердце престижной Золотой площади Барселоны. Редкое сочетание модернистской архитектуры и современной роскоши.",
                              "Высокие потолки с оригинальной лепниной, мраморные и деревянные полы, отдельный балкон, сигнализация и три просторные спальни, каждая с отдельной ванной комнатой. Расположен в элегантном старинном здании с лифтом и услугами консьержа.",
                              "Класс энергопотребления C. Все лучшие места Барселоны в нескольких минутах ходьбы: Пасео де Грасиа, Ла Педрера, Дом Бальо, а также лучшие рестораны и бутики города."
                        ]
                  }
            }
      },
      {
            "slug": "eixample-golden-mile",
            "title": "Elegant Renovated Apartment in Eixample's Golden Mile",
            "price": "€1,200,000",
            "ref": "AN-10006",
            "neighbourhood": "Dreta de l'Eixample, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 3,
            "baths": 3,
            "size": "140",
            "floor": "2nd",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_02_Salon-EFA.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_02_Salon-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_04_Salon-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_05_Hall-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_06_Hab_sec-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_07_Suite-Vestidor-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_08_Suite-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404792/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_09_Bath-Suite-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404793/an-realestate/eixample-golden-mile/P_2456_Julia-Angli_Habitatge_10_Bath-EFA.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404793/an-realestate/eixample-golden-mile/Planta.png"
            ],
            "description": [
                  "Second-floor apartment in an early 20th-century modernist building on the Golden Mile, steps from Passeig de Gràcia, Casa Batlló, and La Pedrera. A masterful blend of historic architecture and contemporary refinement.",
                  "The open-plan living and dining area of 45.8 m² opens to a private interior plaza. The master suite features an 18.8 m² bedroom, a 4.7 m² bathroom, and a walk-in closet. A second double bedroom and a third room complete the layout, alongside three elegant balconies.",
                  "High ceilings with intricate mouldings and authentic Catalan vaulted ceilings throughout. Fully renovated to the highest standard."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "140 m² (135 m² living)"
                  },
                  {
                        "key": "Floor",
                        "val": "2nd floor"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "3"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "3"
                  },
                  {
                        "key": "Living / dining",
                        "val": "45.8 m²"
                  },
                  {
                        "key": "Master suite",
                        "val": "18.8 m² + walk-in closet"
                  },
                  {
                        "key": "Balconies",
                        "val": "3 × 1.7 m²"
                  },
                  {
                        "key": "Energy class",
                        "val": "C"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-10006"
                  }
            ],
            "features": {
                  "Interior": [
                        "45.8 m² open-plan living & dining",
                        "Master suite with walk-in closet",
                        "High ceilings with intricate mouldings",
                        "Catalan vaulted ceilings",
                        "3 balconies",
                        "Access to private interior plaza"
                  ],
                  "Building": [
                        "Early 20th-century modernist building",
                        "Elevator"
                  ]
            },
            "nearby": [
                  {
                        "name": "Passeig de Gràcia",
                        "dist": "2 min walk"
                  },
                  {
                        "name": "Casa Batlló",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "La Pedrera",
                        "dist": "4 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "20 min drive"
                  }
            ],
            "published": true,
            "sold": true,
            "translations": {
                  "es": {
                        "title": "Elegante apartamento reformado en la Milla de Oro del Eixample",
                        "description": [
                              "Apartamento en el segundo piso de un edificio modernista de principios del siglo XX en la Milla de Oro, a pasos del Passeig de Gràcia, la Casa Batlló y La Pedrera. Una combinación magistral de arquitectura histórica y refinamiento contemporáneo.",
                              "La sala de estar y comedor de planta abierta de 45,8 m² se abre a una plaza interior privada. La suite principal cuenta con un dormitorio de 18,8 m², un baño de 4,7 m² y vestidor. Un segundo dormitorio doble y una tercera habitación completan la distribución, además de tres elegantes balcones.",
                              "Techos altos con molduras intrincadas y auténticas bóvedas catalanas en todas partes. Totalmente renovado al más alto nivel."
                        ]
                  },
                  "ca": {
                        "title": "Elegant pis reformat a la Milla d'Or de l'Eixample",
                        "description": [
                              "Apartament de segona planta en un edifici modernista de principis del segle XX a la Milla d'Or, a poca distància del passeig de Gràcia, la Casa Batlló i la Pedrera. Una combinació magistral d'arquitectura històrica i refinament contemporani.",
                              "La sala d'estar i menjador de planta oberta de 45,8 m² s'obre a una plaça interior privada. La suite principal té un dormitori de 18,8 m², un bany de 4,7 m² i un vestidor. Un segon dormitori doble i una tercera habitació completen la distribució, al costat de tres elegants balcons.",
                              "Sostres alts amb motllures intricades i autèntics sostres de volta catalana a tot arreu. Totalment renovat amb el més alt nivell."
                        ]
                  },
                  "fr": {
                        "title": "Élégant appartement rénové dans le Golden Mile de l'Eixample",
                        "description": [
                              "Appartement au deuxième étage dans un immeuble moderniste du début du XXe siècle sur le Golden Mile, à quelques pas du Passeig de Gràcia, de la Casa Batlló et de La Pedrera. Un mélange magistral entre architecture historique et raffinement contemporain.",
                              "Le salon et salle à manger décloisonné de 45,8 m² s'ouvre sur une place intérieure privée. La suite parentale comprend une chambre de 18,8 m², une salle de bain de 4,7 m² et un dressing. Une deuxième chambre double et une troisième pièce complètent l'aménagement, ainsi que trois élégants balcons.",
                              "Hauts plafonds avec moulures complexes et plafonds voûtés catalans authentiques partout. Entièrement rénové au plus haut niveau."
                        ]
                  },
                  "de": {
                        "title": "Elegant renoviertes Apartment an der Goldenen Meile von Eixample",
                        "description": [
                              "Apartment im zweiten Stock in einem modernistischen Gebäude aus dem frühen 20. Jahrhundert an der Goldenen Meile, nur wenige Schritte vom Passeig de Gràcia, Casa Batlló und La Pedrera entfernt. Eine meisterhafte Mischung aus historischer Architektur und zeitgenössischer Raffinesse.",
                              "Der offene Wohn- und Essbereich von 45,8 m² öffnet sich zu einem privaten Innenplatz. Die Master-Suite verfügt über ein 18,8 m² großes Schlafzimmer, ein 4,7 m² großes Badezimmer und einen begehbaren Kleiderschrank. Ein zweites Schlafzimmer mit Doppelbett und ein drittes Zimmer sowie drei elegante Balkone runden die Raumaufteilung ab.",
                              "Hohe Decken mit aufwendigen Zierleisten und authentischen katalanischen Gewölbedecken im gesamten Gebäude. Komplett auf höchstem Niveau renoviert."
                        ]
                  },
                  "it": {
                        "title": "Elegante appartamento ristrutturato nel Miglio d'Oro dell'Eixample",
                        "description": [
                              "Appartamento al secondo piano di un edificio modernista degli inizi del XX secolo sul Miglio d'Oro, a pochi passi da Passeig de Gràcia, Casa Batlló e La Pedrera. Una miscela magistrale di architettura storica e raffinatezza contemporanea.",
                              "La zona giorno e pranzo a pianta aperta di 45,8 m² si apre su una piazza interna privata. La master suite dispone di una camera da letto di 18,8 m², un bagno di 4,7 m² e una cabina armadio. Una seconda camera matrimoniale ed una terza camera completano la disposizione, oltre a tre eleganti balconi.",
                              "Soffitti alti con modanature intricate e autentici soffitti a volta catalani ovunque. Completamente rinnovato secondo i più alti standard."
                        ]
                  },
                  "ru": {
                        "title": "Элегантная отремонтированная квартира на Золотой Миле Эшампле",
                        "description": [
                              "Квартира на втором этаже модернистского здания начала 20-го века на Золотой Миле, в нескольких шагах от проспекта Пасео-де-Грасиа, Дома Бальо и Дома Мила. Мастерское сочетание исторической архитектуры и современной изысканности.",
                              "Гостиная и столовая открытой планировки площадью 45,8 м² выходят на частную внутреннюю площадь. В главной спальне есть спальня площадью 18,8 м², ванная комната площадью 4,7 м² и гардеробная. Вторая спальня с двуспальной кроватью и третья комната завершают планировку, а также три элегантных балкона.",
                              "Высокие потолки с замысловатой лепниной и настоящими каталонскими сводчатыми потолками. Полностью отремонтирован по самым высоким стандартам."
                        ]
                  }
            }
      },
      {
            "slug": "vallvidrera-villa",
            "title": "Exquisite Modern Villa with 360° Views Over Barcelona",
            "price": "€5,500,000",
            "ref": "AN-AN1005",
            "neighbourhood": "Vallvidrera, Barcelona",
            "type": "villa",
            "status": "sale",
            "badge_type": "Villa",
            "beds": 6,
            "baths": 6,
            "size": "634",
            "floor": "3 levels",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404793/an-realestate/vallvidrera-villa/Mont-dorsa-68_17.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404793/an-realestate/vallvidrera-villa/Mont-dorsa-68_17.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404793/an-realestate/vallvidrera-villa/Mont-dorsa-68_18.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404794/an-realestate/vallvidrera-villa/Mont-dorsa-68_19.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404794/an-realestate/vallvidrera-villa/Mont-dorsa-68_22.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404794/an-realestate/vallvidrera-villa/Mont-dorsa-68_23.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404794/an-realestate/vallvidrera-villa/Mont-dorsa-68_25.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404794/an-realestate/vallvidrera-villa/Mont-dorsa-68_26.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404795/an-realestate/vallvidrera-villa/Mont-dorsa-68_27.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404795/an-realestate/vallvidrera-villa/Mont-dorsa-68_28.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404795/an-realestate/vallvidrera-villa/Mont-dorsa-68_29.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404795/an-realestate/vallvidrera-villa/Mont-dorsa-68_30.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_31.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_32.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_33.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_34.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_35.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404796/an-realestate/vallvidrera-villa/Mont-dorsa-68_36.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404797/an-realestate/vallvidrera-villa/Mont-dorsa-68_38-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404797/an-realestate/vallvidrera-villa/Mont-dorsa-68_42.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404797/an-realestate/vallvidrera-villa/Mont-dorsa-68_48.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404797/an-realestate/vallvidrera-villa/Mont-dorsa-68_49.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404797/an-realestate/vallvidrera-villa/Mont-dorsa-68_50.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404798/an-realestate/vallvidrera-villa/Mont-dorsa-68_51.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404798/an-realestate/vallvidrera-villa/Mont-dorsa-68_52.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404798/an-realestate/vallvidrera-villa/Mont-dorsa-68_53-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404798/an-realestate/vallvidrera-villa/Mont-dorsa-68_54.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404799/an-realestate/vallvidrera-villa/Mont-dorsa-68_55.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404799/an-realestate/vallvidrera-villa/Mont-dorsa-68_56.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404799/an-realestate/vallvidrera-villa/Mont-dorsa-68_57.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404799/an-realestate/vallvidrera-villa/Mont-dorsa-68_58.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404800/an-realestate/vallvidrera-villa/Mont-dorsa-68_59-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/vallvidrera-villa/Mont-dorsa-68_60.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/vallvidrera-villa/Mont-dorsa-68_61.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404800/an-realestate/vallvidrera-villa/Mont-dorsa-68_62.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/vallvidrera-villa/Mont-dorsa-68_63.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/vallvidrera-villa/Mont-dorsa-68_64.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404800/an-realestate/vallvidrera-villa/Mont-dorsa-68_65-1.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/vallvidrera-villa/Mont-dorsa-68_66-1.jpg"
            ],
            "description": [
                  "A once-in-a-generation opportunity to acquire one of Barcelona's most extraordinary private residences. Completed in 2022, this three-level contemporary villa sits on a prime corner plot in Vallvidrera with unobstructed 360° panoramic views over the city and the Mediterranean.",
                  "The villa spans 634 m² across three levels: ground level with seven-car garage, wine cellar, and service areas; lower floor with open-plan living, dining, and premium kitchen opening to the garden; first floor with four luxury en-suite bedrooms including a 70 m² master suite; top level with multi-purpose rooms and a 117 m² terrace.",
                  "State-of-the-art amenities: smart home automation, climate-controlled pool, Finnish sauna. Exceptional sustainability: energy class A, solar panels, aerothermal underfloor heating."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Detached villa"
                  },
                  {
                        "key": "Total area",
                        "val": "634 m²"
                  },
                  {
                        "key": "Levels",
                        "val": "3"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "6 en-suite"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "6"
                  },
                  {
                        "key": "Master suite",
                        "val": "70 m²"
                  },
                  {
                        "key": "Top terrace",
                        "val": "117 m²"
                  },
                  {
                        "key": "Garage",
                        "val": "7 cars"
                  },
                  {
                        "key": "Year built",
                        "val": "2022"
                  },
                  {
                        "key": "Energy class",
                        "val": "A"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-AN1005"
                  }
            ],
            "features": {
                  "Interior": [
                        "70 m² master suite",
                        "6 en-suite bedrooms",
                        "Open-plan living & dining",
                        "Premium kitchen",
                        "Wine cellar",
                        "Smart home automation"
                  ],
                  "Outdoor": [
                        "Climate-controlled pool",
                        "117 m² roof terrace",
                        "Private garden",
                        "Finnish sauna",
                        "7-car garage",
                        "360° panoramic views"
                  ],
                  "Sustainability": [
                        "Energy class A",
                        "Solar panels",
                        "Aerothermal underfloor heating",
                        "Superior insulation"
                  ]
            },
            "nearby": [
                  {
                        "name": "Vallvidrera FGC Station",
                        "dist": "5 min drive"
                  },
                  {
                        "name": "Parc Natural de Collserola",
                        "dist": "Walking distance"
                  },
                  {
                        "name": "Barcelona city centre",
                        "dist": "15 min drive"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "30 min drive"
                  }
            ],
            "published": true,
            "translations": {
                  "es": {
                        "title": "Exquisita villa moderna con vistas de 360° sobre Barcelona",
                        "description": [
                              "Una oportunidad única en una generación para adquirir una de las residencias privadas más extraordinarias de Barcelona. Terminada en 2022, esta villa contemporánea de tres niveles se encuentra en una parcela de esquina privilegiada en Vallvidrera con vistas panorámicas despejadas de 360° sobre la ciudad y el Mediterráneo.",
                              "La villa ocupa 634 m² distribuidos en tres niveles: planta baja con garaje para siete coches, bodega y áreas de servicio; planta baja con sala de estar, comedor y cocina premium de planta abierta que se abren al jardín; primer piso con cuatro lujosas habitaciones con baño, incluida una suite principal de 70 m²; Planta superior con salas polivalentes y terraza de 117 m².",
                              "Equipamientos de última generación: domótica inteligente, piscina climatizada, sauna finlandesa. Sostenibilidad excepcional: clase energética A, placas solares, suelo radiante de aerotermia."
                        ]
                  },
                  "ca": {
                        "title": "Exquisita vila moderna amb vistes de 360° sobre Barcelona",
                        "description": [
                              "Una oportunitat única per a la generació d'adquirir una de les residències privades més extraordinàries de Barcelona. Acabada l'any 2022, aquesta vila contemporània de tres nivells es troba en una parcel·la cantonera privilegiada a Vallvidrera amb vistes panoràmiques de 360° sobre la ciutat i el Mediterrani.",
                              "La vila té 634 m² distribuïts en tres nivells: planta baixa amb garatge per a set cotxes, celler i zones de servei; planta baixa amb sala d'estar, menjador i cuina premium oberta al jardí; primer pis amb quatre habitacions de luxe amb bany, inclosa una suite principal de 70 m²; nivell superior amb sales polivalents i una terrassa de 117 m².",
                              "Instal·lacions d'última generació: domòtica intel·ligent, piscina climatitzada, sauna finlandesa. Sostenibilitat excepcional: classe energètica A, plaques solars, calefacció per terra radiant aerotèrmica."
                        ]
                  },
                  "fr": {
                        "title": "Exquise villa moderne avec vue à 360° sur Barcelone",
                        "description": [
                              "Une opportunité unique d'acquérir l'une des résidences privées les plus extraordinaires de Barcelone. Achevée en 2022, cette villa contemporaine sur trois niveaux se trouve sur un terrain d'angle privilégié à Vallvidrera avec une vue panoramique imprenable à 360° sur la ville et la Méditerranée.",
                              "La villa s'étend sur 634 m² sur trois niveaux : rez-de-chaussée avec garage pour sept voitures, cave à vin et zones de service ; étage inférieur avec salon ouvert, salle à manger et cuisine haut de gamme ouvrant sur le jardin ; premier étage avec quatre chambres luxueuses en suite dont une suite parentale de 70 m² ; dernier niveau avec des pièces polyvalentes et une terrasse de 117 m².",
                              "Prestations à la pointe de la technologie : domotique intelligente, piscine climatisée, sauna finlandais. Durabilité exceptionnelle : classe énergétique A, panneaux solaires, chauffage au sol aérothermie."
                        ]
                  },
                  "de": {
                        "title": "Exquisite moderne Villa mit 360°-Blick über Barcelona",
                        "description": [
                              "Eine einmalige Gelegenheit, eine der außergewöhnlichsten Privatresidenzen Barcelonas zu erwerben. Diese dreistöckige, moderne Villa wurde 2022 fertiggestellt und befindet sich auf einem erstklassigen Eckgrundstück in Vallvidrera mit freiem 360°-Panoramablick über die Stadt und das Mittelmeer.",
                              "Die Villa erstreckt sich über 634 m² auf drei Ebenen: Erdgeschoss mit Garage für sieben Autos, Weinkeller und Servicebereichen; untere Etage mit offenem Wohn-, Esszimmer und hochwertiger Küche mit Zugang zum Garten; erste Etage mit vier luxuriösen Schlafzimmern mit eigenem Bad, darunter eine 70 m² große Master-Suite; Obergeschoss mit Mehrzweckräumen und einer 117 m² großen Terrasse.",
                              "Modernste Ausstattung: Smart-Home-Automatisierung, klimatisierter Pool, finnische Sauna. Außergewöhnliche Nachhaltigkeit: Energieklasse A, Sonnenkollektoren, aerothermische Fußbodenheizung."
                        ]
                  },
                  "it": {
                        "title": "Splendida villa moderna con vista a 360° su Barcellona",
                        "description": [
                              "Un'opportunità irripetibile per acquisire una delle residenze private più straordinarie di Barcellona. Completata nel 2022, questa villa contemporanea su tre livelli si trova su un terreno d'angolo privilegiato a Vallvidrera con vista panoramica a 360° senza ostacoli sulla città e sul Mediterraneo.",
                              "La villa si estende per 634 mq su tre livelli: piano terra con garage per sette auto, cantina e zone di servizio; piano inferiore con soggiorno a pianta aperta, sala da pranzo e cucina premium con accesso al giardino; primo piano con quattro lussuose camere da letto con bagno privato di cui una master suite di 70 mq; ultimo livello con locali polivalenti e terrazzo di 117 mq.",
                              "Dotazioni all'avanguardia: domotica intelligente, piscina climatizzata, sauna finlandese. Sostenibilità eccezionale: classe energetica A, pannelli solari, riscaldamento a pavimento aerotermico."
                        ]
                  },
                  "ru": {
                        "title": "Изысканная современная вилла с 360-градусным видом на Барселону",
                        "description": [
                              "Уникальная возможность приобрести одну из самых необычных частных резиденций Барселоны. Эта трехуровневая современная вилла, построенная в 2022 году, расположена на престижном угловом участке в Вальвидрере с беспрепятственным панорамным видом на город и Средиземное море на 360°.",
                              "Вилла занимает площадь 634 м² на трех уровнях: первый уровень с гаражом на семь автомобилей, винным погребом и служебными помещениями; нижний этаж с гостиной открытой планировки, столовой и кухней премиум-класса с выходом в сад; второй этаж с четырьмя роскошными спальнями с ванными комнатами, включая главную спальню площадью 70 м²; верхний уровень с многофункциональными помещениями и террасой площадью 117 м².",
                              "Самые современные удобства: умная домашняя автоматизация, бассейн с климат-контролем, финская сауна. Исключительная экологичность: класс энергопотребления А, солнечные батареи, аэротермический пол с подогревом."
                        ]
                  }
            }
      },
      {
            "slug": "eixample-villarroel",
            "title": "Newly Renovated 3-Bedroom Apartment with Timeless Elegance in Eixample",
            "price": "€820,000",
            "ref": "AN-AN1004",
            "neighbourhood": "Eixample, Barcelona",
            "type": "apartment",
            "status": "sale",
            "badge_type": "Apartment",
            "beds": 3,
            "baths": 2,
            "size": "104",
            "floor": "Upper",
            "image": "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/eixample-villarroel/villarroel.jpg",
            "images": [
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404801/an-realestate/eixample-villarroel/villarroel.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/eixample-villarroel/final_cropped_image_6.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/eixample-villarroel/final_cropped_image_7.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/eixample-villarroel/final_cropped_image_8.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/eixample-villarroel/final_cropped_image_4.jpg",
                  "https://res.cloudinary.com/dbume3eak/image/upload/v1777404802/an-realestate/eixample-villarroel/framed_plan_image_high_res.jpg"
            ],
            "description": [
                  "Beautifully renovated apartment in the prestigious Eixample district, combining timeless period elegance with state-of-the-art contemporary finishes. Renovated in 2022 to the highest standard.",
                  "Expansive living room flowing into an open-concept kitchen, a master suite with walk-in closet and en-suite bathroom, a south-facing private terrace, and parquet flooring throughout.",
                  "Located in a meticulously restored period building with original modernist architectural elements. One of Eixample's most desirable residential addresses."
            ],
            "details": [
                  {
                        "key": "Property type",
                        "val": "Apartment"
                  },
                  {
                        "key": "Built area",
                        "val": "104.38 m²"
                  },
                  {
                        "key": "Bedrooms",
                        "val": "3"
                  },
                  {
                        "key": "Bathrooms",
                        "val": "2"
                  },
                  {
                        "key": "Year renovated",
                        "val": "2022"
                  },
                  {
                        "key": "Energy class",
                        "val": "A"
                  },
                  {
                        "key": "Terrace",
                        "val": "South-facing private"
                  },
                  {
                        "key": "Reference",
                        "val": "AN-AN1004"
                  }
            ],
            "features": {
                  "Interior": [
                        "Expansive open-plan living",
                        "Master suite with walk-in closet",
                        "State-of-the-art kitchen",
                        "Parquet flooring",
                        "South-facing terrace"
                  ],
                  "Building": [
                        "Modernist building",
                        "Elevator",
                        "Fully restored period building"
                  ]
            },
            "nearby": [
                  {
                        "name": "Urgell Metro (L1)",
                        "dist": "3 min walk"
                  },
                  {
                        "name": "Mercat de Sant Antoni",
                        "dist": "5 min walk"
                  },
                  {
                        "name": "Passeig de Gràcia",
                        "dist": "10 min walk"
                  },
                  {
                        "name": "El Prat International Airport",
                        "dist": "20 min drive"
                  }
            ],
            "published": true,
            "sold": true,
            "translations": {
                  "es": {
                        "title": "Apartamento de 3 dormitorios recientemente renovado con elegancia atemporal en el Eixample",
                        "description": [
                              "Apartamento bellamente renovado en el prestigioso distrito del Eixample, que combina la elegancia atemporal de la época con acabados contemporáneos de última generación. Renovado en 2022 al más alto nivel.",
                              "Amplia sala de estar que desemboca en una cocina de concepto abierto, una suite principal con vestidor y baño en suite, una terraza privada orientada al sur y suelos de parquet en todas partes.",
                              "Ubicado en un edificio de época minuciosamente restaurado con elementos arquitectónicos modernistas originales. Una de las direcciones residenciales más deseadas del Eixample."
                        ]
                  },
                  "ca": {
                        "title": "Apartament de 3 habitacions recentment reformat amb una elegància atemporal a l'Eixample",
                        "description": [
                              "Preciós apartament reformat al prestigiós barri de l'Eixample, que combina l'elegància d'època atemporal amb els acabats contemporanis d'última generació. Renovat el 2022 amb el més alt nivell.",
                              "Ampli saló que desemboca en una cuina de concepte obert, una suite principal amb vestidor i bany privat, una terrassa privada orientada al sud i terres de parquet a tot arreu.",
                              "Situat en un edifici d'època minuciosament restaurat amb elements arquitectònics modernistes originals. Una de les adreces residencials més desitjades de l'Eixample."
                        ]
                  },
                  "fr": {
                        "title": "Appartement de 3 chambres récemment rénové avec une élégance intemporelle dans l'Eixample",
                        "description": [
                              "Appartement magnifiquement rénové dans le prestigieux quartier de l'Eixample, alliant élégance intemporelle d'époque et finitions contemporaines de pointe. Rénové en 2022 au plus haut niveau.",
                              "Vaste séjour donnant sur une cuisine ouverte, une suite parentale avec dressing et salle de bain en suite, une terrasse privée exposée sud et parquet partout.",
                              "Situé dans un bâtiment d'époque méticuleusement restauré avec des éléments architecturaux modernistes d'origine. L'une des adresses résidentielles les plus prisées de l'Eixample."
                        ]
                  },
                  "de": {
                        "title": "Neu renoviertes Apartment mit 3 Schlafzimmern und zeitloser Eleganz in Eixample",
                        "description": [
                              "Wunderschön renovierte Wohnung im prestigeträchtigen Stadtteil Eixample, die zeitlose Eleganz mit modernster zeitgenössischer Ausstattung verbindet. Im Jahr 2022 nach höchstem Standard renoviert.",
                              "Geräumiges Wohnzimmer, das in eine offene Küche übergeht, eine Master-Suite mit begehbarem Kleiderschrank und eigenem Bad, eine private Südterrasse und überall Parkettboden.",
                              "Befindet sich in einem sorgfältig restaurierten historischen Gebäude mit originalen modernistischen Architekturelementen. Eine der begehrtesten Wohnadressen von Eixample."
                        ]
                  },
                  "it": {
                        "title": "Appartamento con 3 camere da letto recentemente ristrutturato con eleganza senza tempo nell'Eixample",
                        "description": [
                              "Appartamento splendidamente ristrutturato nel prestigioso quartiere dell'Eixample, che unisce l'eleganza d'epoca senza tempo con finiture contemporanee all'avanguardia. Ristrutturato nel 2022 secondo i più alti standard.",
                              "Ampio soggiorno che sfocia in una cucina a pianta aperta, una master suite con cabina armadio e bagno privato, una terrazza privata esposta a sud e pavimenti in parquet ovunque.",
                              "Situato in un edificio d'epoca meticolosamente restaurato con elementi architettonici modernisti originali. Uno degli indirizzi residenziali più desiderabili dell'Eixample."
                        ]
                  },
                  "ru": {
                        "title": "Недавно отремонтированная 3-комнатная квартира с неподвластной времени элегантностью в Эшампле",
                        "description": [
                              "Красиво отремонтированная квартира в престижном районе Эшампле, сочетающая вневременную старинную элегантность с современной отделкой. Отремонтирован в 2022 году по высшему стандарту.",
                              "Просторная гостиная, переходящая в кухню открытой планировки, главная спальня с гардеробной и ванной комнатой, отдельная терраса на южной стороне и паркетный пол повсюду.",
                              "Расположен в тщательно отреставрированном старинном здании с оригинальными модернистскими архитектурными элементами. Один из самых привлекательных жилых адресов Эшампле."
                        ]
                  }
            }
      }
]
})
  document.head.appendChild(s)
})()
