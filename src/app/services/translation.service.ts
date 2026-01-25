import { Injectable, signal, computed } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Language, Translations } from '../app.interface';

const translations: Record<Language, Translations> = {
  en: {
    home: {
      title: 'THE LIVING TREASURE<br />OF SHAMANISM',
      subtitle: 'A Digital Journey into the Tuvan Spirit World',
      ctaButton: 'EXPLORE THE UNKNOWN',
      credits: 'Source: "Upralenie verhovnogo shamana" (VK)',
      footer: {
        createdBy: 'Created by',
        name: 'Aizana Kuular',
        university: 'University of Bologna',
        email: 'aizana.kuular@studio.unibo.it',
        course: 'Digital Humanities & Digital Knowledge (DHDK)',
        copyright: '© 2026 Tuvan Shamanism Project. Based on the works of M.B. Kenin-Lopsan.',
      },
    },
    aboutAuthor: {
      title: 'Mongush Kenin-Lopsan',
      years: '(1925 – 2022)',
      description1:
        'Legendary Tuvan scholar, writer, Doctor of Historical Sciences, and shaman. He dedicated his life to preserving the ancient traditions of his people. Kenin-Lopsan was declared a "Living Treasure of Shamanism" by the Foundation for Shamanic Studies (USA).',
      description2:
        'Tuvan shamanism is not a religion in the Western sense, but a way of living in harmony with nature. According to Kenin-Lopsan, a shaman (*Kham*) is a mediator between the human world and the spirits of mountains, rivers, and the sky.',
      quote:
        '"The sound of the drum is a mystic mystery known perfectly by Tuvan shamans. For a ringing drum, there are no boundaries between earth and cosmos."',
      imageCaption: 'The Grand Shaman with his Drum',
    },
    context: {
      landOfTuva: {
        title: 'The Land of Tuva',
        description:
          'Located in the geographical center of Asia (Southern Siberia), Tuva is a land of steppes, mountains, and nomads. Isolated by the Sayan Mountains, it has preserved one of the world\'s oldest forms of shamanism in its purest form.',
      },
      livingTradition: {
        title: 'The Living Tradition',
        description:
          'Unlike many extinct beliefs, Tuvan shamanism is alive. It is a worldview where nature is animate. The Shaman (*Kham*) does not "worship" gods but negotiates with the spirits of fire, water, and ancestors to maintain balance in the Middle World.',
      },
      projectMission: {
        title: 'Project Mission',
        description:
          'This project aims to preserve the intangible heritage of Tuva digitally. By visualizing the shaman\'s sacred tools and their meanings based on Kenin-Lopsan\'s ethnographic data, we open the closed world of the yurt to a global audience, ensuring this wisdom is not lost in time.',
      },
    },
    sources: {
      label: 'PRIMARY SOURCES',
      title: 'Scientific Basis of the Project',
      book1: {
        title: 'Tuvan Shamans',
        author: 'M.B. Kenin-Lopsan (2009)',
        description:
          'The fundamental work describing the mythology, the three worlds (Upper, Middle, Lower), and the poetic folklore of shamanic hymns (*algyshar*).',
      },
      book2: {
        title: 'Ritual Practice and Folklore of Tuvan Shamanism',
        author: 'M.B. Kenin-Lopsan (1987)',
        description:
          'An ethnographic study detailed the shaman\'s costume, attributes (*dungur, orba, kuzungu*), and the structure of healing rituals used in this digital reconstruction.',
      },
    },
    shaman: {
      backButton: 'Return to Main Page',
      imageCaption: 'Source: Управление Верховного Шамана VK',
      title: 'The Mystery of Tuvan Shamans',
      subtitle: 'Based on Chapter III of "Tuvan Shamans" by M.B. Kenin-Lopsan',
      formsOfKamlanie: {
        title: '1. Forms of Kamlanie',
        intro:
          'Field materials collected in all districts of Tuva reveal several main types of <em>Kamlanie</em> (rituals). These vary depending on local conditions, the shaman\'s power, and their artistic skill.',
        ritualTypes: {
          kuzungulug: {
            title: 'Kuzungulug Khamnaary',
            subtitle: '(Kamlanie with a Mirror)',
            description:
              'Every crowned shaman must have a <em>Kuzungu</em> (bronze mirror). With it, one can perform healing rituals. Historically, ancient found bronze mirrors were highly valued for divination and rituals even without full attire.',
          },
          khomustap: {
            title: 'Khomustap Khamnaary',
            subtitle: '(Kamlanie with a Khomus)',
            description:
              'Common in Erzin and Tes-Khem. Shamans performed rituals artistically, accompanying themselves on a <em>Sheler-Khomus</em> (musical instrument). Typically characteristic of "weaker" shamans.',
          },
          derigDungurlug: {
            title: 'Derig-Dungurlug Khamnaary',
            subtitle: '(Kamlanie with Drum & Cloak)',
            description:
              'High-class professional shamans were required to have a full set: a drum (*Dungur*) and ritual cloak (*Derig*). A "true strong shaman" never shamanized without these attributes.',
          },
          dayaktyg: {
            title: 'Dayaktyg Khamnaary',
            subtitle: '(Kamlanie with a Staff)',
            description:
              'According to S.I. Vainshtein, the use of a birch staff called <em>Dayak</em> was characteristic of shamans in the Todzha district.',
          },
        },
      },
      procedureOfKamlanie: {
        title: '2. The Procedure of Kamlanie',
        intro:
          'A Tuvan shaman can perform rituals at any time, but late evening and night are considered most suitable. <em>"The shaman destined to shamanize, leads the ritual in the black night."</em>',
        steps: {
          calling: {
            title: 'Calling the Shaman',
            tuvanTitle: '(Khamny Khooru)',
            description:
              'The patient chooses the shaman. A messenger is sent with a spare horse. If the shaman agrees, he attaches his gear to the saddle and hides the <em>Kuzungu</em> (mirror) in his bosom, allowing no one to touch it.',
          },
          lighting: {
            title: 'Lighting the Censer',
            tuvanTitle: '(Chyttyg San Salyry)',
            description:
              'Before any ritual, the shaman must light the <em>San</em> (censer). Burning coals and juniper (*artysh*) are placed on a flat stone. The shaman purifies his drum and boots over the smoke, standing on one leg.',
          },
          beginning: {
            title: 'Beginning of Kamlanie',
            tuvanTitle: '(Khamnap Egelaeri)',
            description:
              'The shaman beats the drum and circles the censer three times (following the sun). He cries like a cuckoo or raven, signaling the start, and begins a silent conversation with his spirit helpers (*Eerens*).',
          },
          creatingImage: {
            title: 'Creating the Image of Disease',
            tuvanTitle: '(Aarygyn Chuuluzun Kolyry)',
            description:
              'The shaman orders the creation of an "image of the disease." He cuts figures of evil spirits from paper and attaches colorful fabric scraps. This <em>Chuulu</em> is attached to a board (*daspan*) to be carried out later.',
          },
          makingOgaalga: {
            title: 'Making Ogaalga',
            tuvanTitle: '(Ogaalga Kylyry)',
            description:
              'A small square of felt (*Ogaalga*) is prepared with tea leaves and raw meat. This is food to lure the disease spirits out.',
          },
          preparation: {
            title: 'Preparation for Removal',
            tuvanTitle: '(Seriir Choogunda)',
            description:
              'Towards the end, the censer and *Ogaalga* are carried out. The carrier circles the patient three times with the smoking censer, luring the spirits with the pleasant smell and the taste of meat.',
          },
          holyWater: {
            title: 'Holy Water',
            tuvanTitle: '(Arzhaan Kylyry)',
            description:
              'Before the items are removed, the patient washes with "holy water" (*Arzhaan*): water mixed with milk and juniper. Drops must fall onto the disease image (*Chuulu*), not on the ground.',
          },
          divination: {
            title: 'Divination',
            tuvanTitle: '(Toorek Kaary)',
            description: 'The shaman throws his beater (*Orba*) to predict the future:',
            items: {
              anaa: {
                label: 'Anaa Toorek (Good Omen)',
                text: 'Fur side up. "My shaman, the divination is worth silver and gold!"',
              },
              uygu: {
                label: 'Uygu Toorek (Sleep/Bad Omen)',
                text: 'Wood side up. The shaman must drum again to avert danger.',
              },
              kyrlan: {
                label: 'Kyrlan Toorek (Neutral)',
                text: 'Falls on the side. The shaman flips it and throws again.',
              },
            },
          },
          payment: {
            title: 'Payment',
            tuvanTitle: '(Asty)',
            description:
              'Rich patients gave cattle or a horse with silver harness. Poor patients gave a felt rug, skins, or personal ornaments like rings or buttons.',
          },
          offering: {
            title: 'Offering to Attributes',
            tuvanTitle: '(Khamnyn Et-Sevinge)',
            description:
              'Symbolic gifts for the shaman\'s tools: a small bag (*eldik*) with a leather cord, needle, thimble, and tobacco. The attributes must be honored.',
          },
        },
      },
      nextButton: 'Shamanic Costume →',
    },
    clothes: {
      backButton: 'Return to Rituals',
      title: 'Attributes of Tuvan Shamans',
      subtitle: 'Based on Chapter IV of "Tuvan Shamans" by M.B. Kenin-Lopsan',
      heroDescription:
        'The shaman\'s costume is not merely clothing; it is armor, a map of the cosmos, and a bird\'s body capable of flight. Without attributes, even a strong shaman is <span class="emphasize-yellow">vulnerable</span>.',
      cloak: {
        title: '1. Khamnaar Ton',
        tuvan: '(Ritual Cloak)',
        subtitle: 'The cloak is a universe in itself. Explore its sacred elements.',
        attributes: {
          iyiKaraKuskun: {
            title: 'Iyi Kara Kuskun',
            subtitle: 'Two Black Ravens',
            description: 'Wooden ravens on shoulders. They act as scouts, flying ahead to find lost souls.',
          },
          aldyChuuru: {
            title: 'Aldy Chuuru',
            subtitle: 'Lynx Fur',
            description: 'A strip of lynx leg fur sewn along the sleeve seams. Can be replaced by wolf or fox.',
          },
          manchak: {
            title: 'Manchak',
            subtitle: 'Fringe Bundle',
            description: '156 leather cords. Vainshtein wrote: "These are the wings allowing the shaman to fly."',
          },
          snakes: {
            title: 'Snakes (Chylan)',
            subtitle: 'Cosmic Guides',
            description:
              '<strong>Shoulder Snakes:</strong> 18 fabric snakes.<br><strong>Shooting Snakes:</strong> Metal chains with arrowheads.<br><strong>Striped Snakes:</strong> 9 snakes with pouches.',
          },
          bells: {
            title: 'Bells & Whistles',
            subtitle: 'Konguraalar',
            description: '15 metal tubes and bells on the back. Their sound creates a hypnotic rhythm during movement.',
          },
          richness: {
            title: 'Richness of Elbow',
            subtitle: 'Shenek Bailaa',
            description: 'Brocade pouch and 9 leather straps on the left sleeve with three white ribbons.',
          },
        },
      },
      headdress: {
        title: '2. Khamnaar Bort',
        tuvan: '(Shamanic Headdress)',
        subtitle:
          '"The headdress serves as protection from evil spirits and grants the shaman double vision."',
        details: {
          copperFace: {
            title: 'Copper Face',
            tuvan: '(Khola Khaay, Khola Karak)',
            description:
              'A copper nose and copper eyes are sewn onto the front. Surrounded by red fabric circles, they give the headdress the appearance of a mythical creature.',
          },
          copperHorns: {
            title: 'Copper Horns',
            tuvan: '(Ches Myiys)',
            description:
              'Stylized copper horns (~15cm) forged by a blacksmith. They protect against evil spirits. Historically, horned headdresses have a deep tradition dating back to the Iron Age.',
          },
          eagleFeathers: {
            title: 'Eagle Feathers',
            tuvan: '(Sannash)',
            description:
              'The main decoration consists of 40 large and 20 small eagle feathers. They represent the birds—spirit helpers. "The eagle spirit helps the shaman to fly."',
          },
          blackWings: {
            title: 'Black Wings',
            tuvan: '(Suuk-Kara)',
            description:
              'Two long black feathers at the very front. They act as "fins" or rudders, helping the shaman overcome air resistance during his cosmic flight.',
          },
          fringe: {
            title: 'The Fringe',
            tuvan: '(Borttun Khanazy)',
            description:
              'The "wall of the hat" covers the eyes. Traditionally decorated with maral (deer) teeth or beads and checkerboard embroidery. It hides the shaman\'s human gaze from the spirits.',
          },
        },
      },
      drum: {
        title: '3. Dungur & Orba',
        tuvan: '(Drum & Beater)',
        subtitle: '"The Drum is the shaman\'s steed. The Beater is his whip. Together they transport him through the worlds."',
        drumTitle: 'The Drum (Dungur)',
        beaterTitle: 'The Beater (Orba)',
        drumDetails: {
          frame: {
            title: 'The Frame',
            tuvan: '(Rim)',
            description: 'Made of larch wood. Before cutting the tree, a ritual is performed to feed the forest spirit.',
          },
          skin: {
            title: 'The Skin',
            tuvan: '(Dungurnun Algyzy)',
            description: 'Depending on the region, the skin of a mountain goat (*te*), maral deer, or roe deer is used.',
          },
          handle: {
            title: 'The Handle',
            tuvan: '(Tudazy)',
            description: 'The vertical bar inside. It often depicts the monstrous bird Khaan-Khereti or the shaman himself.',
          },
          crossbar: {
            title: 'The Crossbar',
            tuvan: '(Sheezhep)',
            description: 'A horizontal willow stick holding bronze bells and arrowheads.',
          },
        },
        beaterDetails: {
          material: {
            title: 'Material',
            description: 'Made from elk horn (Eastern Tuva) or pine/juniper root (Western Tuva). The beater is a sacred tool for divination.',
          },
          frontSide: {
            title: 'Front Side',
            tuvan: '(Orbanyn Arny)',
            description: 'The striking side is covered with the skin of a bear or mountain goat.',
          },
          backSide: {
            title: 'Back Side',
            tuvan: '(Orbanyn Arty)',
            description: 'Decorated with carvings (often a pine tree with a bird) and metal rings. The rings jingle, adding another layer of sound.',
          },
          divinationTool: {
            title: 'Divination Tool',
            description:
              'The beater is used to predict the future. When thrown, if it lands fur-up, it is good luck. Wood-up means danger.',
          },
        },
      },
      nextAction: {
        text: 'You have studied the armor. Now touch the instruments.',
        button: 'Open the Altar →',
      },
    },
    altar: {
      backButton: '← Return to Clothes',
      title: 'Sacred Attributes',
      description:
        'According to Tuvan tradition, a shaman\'s power resides in their attributes. These are not mere objects, but living entities — "horses" for traveling across worlds and "armor" against evil spirits. Explore the items below to learn their hidden meanings.',
      items: {
        orba: {
          name: "Orba (Shaman's Beater)",
          description:
            "The Orba is not just a tool to beat the drum, but a sacred instrument for divination (Toorek). The shaman throws it: if it lands fur-side up, it is a good omen; if wood-side up, danger approaches. It is often covered with the skin of a male goat and adorned with metal rings symbolizing the shaman's ears.",
        },
        kuzungu: {
          name: 'Kuzungu (Bronze Mirror)',
          description:
            'The Kuzungu is the "eye" of the shaman. Worn on the chest, this bronze mirror repels attacks from evil spirits and reflects the invisible world. A shaman can shamanize without a drum, but never without a mirror. It is the ultimate shield.',
        },
        bearClaw: {
          name: 'Adyg Eeren (Bear Spirit)',
          description:
            'An amulet made of bear claws. The bear (Adyg) is the most powerful ancestor spirit. This Eeren gives the shaman immense physical and spiritual strength to fight dark forces of the Lower World.',
        },
        arrow: {
          name: "Ydyk O'k (Sacred Arrow)",
          description:
            'The Sacred Arrow attracts good fortune (Keshik) and protects the souls of family members. It is never used as a weapon, but as a magical antenna to catch blessings from the Upper World.',
        },
        tosKarak: {
          name: 'Tos-Karak (Nine Eyes)',
          description:
            'A ritual spoon with nine holes used for sprinkling milk or tea to the spirits of nature. The nine holes symbolize the nine heavens. It is used in morning rituals to feed the masters of mountains and rivers.',
        },
      },
    },
    common: {
      source: 'Source:',
      close: '×',
    },
  },
  it: {
    home: {
      title: 'IL TESORO VIVENTE<br />DELLO SCIAMANESIMO',
      subtitle: 'Un viaggio digitale nel mondo spirituale tuvano',
      ctaButton: 'ESPLORA L\'IGNOTO',
      credits: 'Fonte: "Upralenie verhovnogo shamana" (VK)',
      footer: {
        createdBy: 'Creato da',
        name: 'Aizana Kuular',
        university: 'Università di Bologna',
        email: 'aizana.kuular@studio.unibo.it',
        course: 'Digital Humanities & Digital Knowledge (DHDK)',
        copyright: '© 2026 Tuvan Shamanism Project. Basato sulle opere di M.B. Kenin-Lopsan.',
      },
    },
    aboutAuthor: {
      title: 'Mongush Kenin-Lopsan',
      years: '(1925 – 2022)',
      description1:
        'Leggendario studioso tuvano, scrittore, Dottore in Scienze Storiche e sciamano. Ha dedicato la sua vita a preservare le antiche tradizioni del suo popolo. Kenin-Lopsan è stato dichiarato "Tesoro Vivente dello Sciamanesimo" dalla Foundation for Shamanic Studies (USA).',
      description2:
        'Lo sciamanesimo tuvano non è una religione nel senso occidentale, ma un modo di vivere in armonia con la natura. Secondo Kenin-Lopsan, uno sciamano (*Kham*) è un mediatore tra il mondo umano e gli spiriti delle montagne, dei fiumi e del cielo.',
      quote:
        '"Il suono del tamburo è un mistero mistico conosciuto perfettamente dagli sciamani tuvani. Per un tamburo che risuona, non ci sono confini tra terra e cosmo."',
      imageCaption: 'Il Grande Sciamano con il suo Tamburo',
    },
    context: {
      landOfTuva: {
        title: 'La Terra di Tuva',
        description:
          'Situata nel centro geografico dell\'Asia (Siberia meridionale), Tuva è una terra di steppe, montagne e nomadi. Isolata dai monti Saiani, ha preservato una delle forme più antiche di sciamanesimo nella sua forma più pura.',
      },
      livingTradition: {
        title: 'La Tradizione Vivente',
        description:
          'A differenza di molte credenze estinte, lo sciamanesimo tuvano è vivo. È una visione del mondo in cui la natura è animata. Lo Sciamano (*Kham*) non "adora" divinità ma negozia con gli spiriti del fuoco, dell\'acqua e degli antenati per mantenere l\'equilibrio nel Mondo di Mezzo.',
      },
      projectMission: {
        title: 'Missione del Progetto',
        description:
          'Questo progetto mira a preservare il patrimonio immateriale di Tuva in formato digitale. Visualizzando gli strumenti sacri dello sciamano e i loro significati basati sui dati etnografici di Kenin-Lopsan, apriamo il mondo chiuso della iurta a un pubblico globale, assicurando che questa saggezza non vada perduta nel tempo.',
      },
    },
    sources: {
      label: 'FONTI PRIMARIE',
      title: 'Base scientifica del progetto',
      book1: {
        title: 'Tuvan Shamans',
        author: 'M.B. Kenin-Lopsan (2009)',
        description:
          'L\'opera fondamentale che descrive la mitologia, i tre mondi (Superiore, Medio, Inferiore) e il folklore poetico degli inni sciamanici (*algyshar*).',
      },
      book2: {
        title: 'Ritual Practice and Folklore of Tuvan Shamanism',
        author: 'M.B. Kenin-Lopsan (1987)',
        description:
          'Uno studio etnografico che descrive in dettaglio il costume dello sciamano, gli attributi (*dungur, orba, kuzungu*) e la struttura dei rituali di guarigione utilizzati in questa ricostruzione digitale.',
      },
    },
    shaman: {
      backButton: 'Ritorna alla pagina principale',
      imageCaption: 'Fonte: Управление Верховного Шамана VK',
      title: 'Il Mistero degli Sciamani Tuvani',
      subtitle: 'Basato sul Capitolo III di "Tuvan Shamans" di M.B. Kenin-Lopsan',
      formsOfKamlanie: {
        title: '1. Forme del Kamlanie',
        intro:
          'I materiali sul campo raccolti in tutti i distretti di Tuva rivelano diversi tipi principali di <em>Kamlanie</em> (rituali). Questi variano a seconda delle condizioni locali, del potere dello sciamano e della sua abilità artistica.',
        ritualTypes: {
          kuzungulug: {
            title: 'Kuzungulug Khamnaary',
            subtitle: '(Kamlanie con Specchio)',
            description:
              'Ogni sciamano incoronato deve avere un <em>Kuzungu</em> (specchio di bronzo). Con esso, si possono eseguire rituali di guarigione. Storicamente, gli antichi specchi di bronzo ritrovati erano molto apprezzati per la divinazione e i rituali anche senza l\'abbigliamento completo.',
          },
          khomustap: {
            title: 'Khomustap Khamnaary',
            subtitle: '(Kamlanie con Khomus)',
            description:
              'Comune a Erzin e Tes-Khem. Gli sciamani eseguivano rituali artisticamente, accompagnandosi con uno <em>Sheler-Khomus</em> (strumento musicale). Tipicamente caratteristico degli sciamani "più deboli".',
          },
          derigDungurlug: {
            title: 'Derig-Dungurlug Khamnaary',
            subtitle: '(Kamlanie con Tamburo e Mantello)',
            description:
              'Agli sciamani professionisti di alta classe era richiesto di avere un set completo: un tamburo (*Dungur*) e un mantello rituale (*Derig*). Un "vero sciamano potente" non sciamanizzava mai senza questi attributi.',
          },
          dayaktyg: {
            title: 'Dayaktyg Khamnaary',
            subtitle: '(Kamlanie con Bastone)',
            description:
              'Secondo S.I. Vainshtein, l\'uso di un bastone di betulla chiamato <em>Dayak</em> era caratteristico degli sciamani nel distretto di Todzha.',
          },
        },
      },
      procedureOfKamlanie: {
        title: '2. La Procedura del Kamlanie',
        intro:
          'Uno sciamano tuvano può eseguire rituali in qualsiasi momento, ma la tarda sera e la notte sono considerate le più adatte. <em>"Lo sciamano destinato a sciamanizzare, guida il rituale nella notte nera."</em>',
        steps: {
          calling: {
            title: 'Chiamata dello Sciamano',
            tuvanTitle: '(Khamny Khooru)',
            description:
              'Il paziente sceglie lo sciamano. Viene inviato un messaggero con un cavallo di riserva. Se lo sciamano accetta, attacca la sua attrezzatura alla sella e nasconde il <em>Kuzungu</em> (specchio) nel petto, non permettendo a nessuno di toccarlo.',
          },
          lighting: {
            title: 'Accensione dell\'Incensiere',
            tuvanTitle: '(Chyttyg San Salyry)',
            description:
              'Prima di ogni rituale, lo sciamano deve accendere il <em>San</em> (incensiere). Carboni ardenti e ginepro (*artysh*) vengono posti su una pietra piatta. Lo sciamano purifica il suo tamburo e gli stivali sopra il fumo, stando su una gamba sola.',
          },
          beginning: {
            title: 'Inizio del Kamlanie',
            tuvanTitle: '(Khamnap Egelaeri)',
            description:
              'Lo sciamano batte il tamburo e gira tre volte intorno all\'incensiere (seguendo il sole). Grida come un cuculo o un corvo, segnalando l\'inizio, e comincia una conversazione silenziosa con i suoi spiriti aiutanti (*Eerens*).',
          },
          creatingImage: {
            title: 'Creazione dell\'Immagine della Malattia',
            tuvanTitle: '(Aarygyn Chuuluzun Kolyry)',
            description:
              'Lo sciamano ordina la creazione di una "immagine della malattia". Ritaglia figure di spiriti maligni dalla carta e attacca scarti di tessuto colorato. Questo <em>Chuulu</em> viene fissato a una tavola (*daspan*) per essere portato fuori più tardi.',
          },
          makingOgaalga: {
            title: 'Creazione dell\'Ogaalga',
            tuvanTitle: '(Ogaalga Kylyry)',
            description:
              'Un piccolo quadrato di feltro (*Ogaalga*) viene preparato con foglie di tè e carne cruda. Questo è cibo per attirare fuori gli spiriti della malattia.',
          },
          preparation: {
            title: 'Preparazione per la Rimozione',
            tuvanTitle: '(Seriir Choogunda)',
            description:
              'Verso la fine, l\'incensiere e l\'*Ogaalga* vengono portati fuori. Il portatore gira tre volte intorno al paziente con l\'incensiere fumante, attirando gli spiriti con l\'odore piacevole e il gusto della carne.',
          },
          holyWater: {
            title: 'Acqua Sacra',
            tuvanTitle: '(Arzhaan Kylyry)',
            description:
              'Prima che gli oggetti vengano rimossi, il paziente si lava con "acqua sacra" (*Arzhaan*): acqua mescolata con latte e ginepro. Le gocce devono cadere sull\'immagine della malattia (*Chuulu*), non a terra.',
          },
          divination: {
            title: 'Divinazione',
            tuvanTitle: '(Toorek Kaary)',
            description: 'Lo sciamano lancia il suo battente (*Orba*) per predire il futuro:',
            items: {
              anaa: {
                label: 'Anaa Toorek (Buon Presagio)',
                text: 'Lato pelliccia in su. "Mio sciamano, la divinazione vale argento e oro!"',
              },
              uygu: {
                label: 'Uygu Toorek (Sonno/Cattivo Presagio)',
                text: 'Lato legno in su. Lo sciamano deve suonare di nuovo il tamburo per scongiurare il pericolo.',
              },
              kyrlan: {
                label: 'Kyrlan Toorek (Neutrale)',
                text: 'Cade di lato. Lo sciamano lo gira e lancia di nuovo.',
              },
            },
          },
          payment: {
            title: 'Pagamento',
            tuvanTitle: '(Asty)',
            description:
              'I pazienti ricchi davano bestiame o un cavallo con finimenti d\'argento. I pazienti poveri davano un tappeto di feltro, pelli o ornamenti personali come anelli o bottoni.',
          },
          offering: {
            title: 'Offerta agli Attributi',
            tuvanTitle: '(Khamnyn Et-Sevinge)',
            description:
              'Doni simbolici per gli strumenti dello sciamano: una piccola borsa (*eldik*) con un cordino di cuoio, ago, ditale e tabacco. Gli attributi devono essere onorati.',
          },
        },
      },
      nextButton: 'Costume Sciamanico →',
    },
    clothes: {
      backButton: 'Ritorna ai Rituali',
      title: 'Attributi degli Sciamani Tuvani',
      subtitle: 'Basato sul Capitolo IV di "Tuvan Shamans" di M.B. Kenin-Lopsan',
      heroDescription:
        'Il costume dello sciamano non è semplicemente abbigliamento; è un\'armatura, una mappa del cosmo e il corpo di un uccello capace di volare. Senza attributi, anche uno sciamano forte è <span class="emphasize-yellow">vulnerabile</span>.',
      cloak: {
        title: '1. Khamnaar Ton',
        tuvan: '(Mantello Rituale)',
        subtitle: 'Il mantello è un universo in sé. Esplora i suoi elementi sacri.',
        attributes: {
          iyiKaraKuskun: {
            title: 'Iyi Kara Kuskun',
            subtitle: 'Due Corvi Neri',
            description: 'Corvi di legno sulle spalle. Agiscono come esploratori, volando in avanti per trovare le anime perdute.',
          },
          aldyChuuru: {
            title: 'Aldy Chuuru',
            subtitle: 'Pelliccia di Lince',
            description: 'Una striscia di pelliccia di zampa di lince cucita lungo le cuciture delle maniche. Può essere sostituita da lupo o volpe.',
          },
          manchak: {
            title: 'Manchak',
            subtitle: 'Fascio di Frange',
            description: '156 cordini di cuoio. Vainshtein scrisse: "Queste sono le ali che permettono allo sciamano di volare."',
          },
          snakes: {
            title: 'Serpenti (Chylan)',
            subtitle: 'Guide Cosmiche',
            description:
              '<strong>Serpenti da Spalla:</strong> 18 serpenti di tessuto.<br><strong>Serpenti Tiratori:</strong> Catene metalliche con punte di freccia.<br><strong>Serpenti Striati:</strong> 9 serpenti con sacchetti.',
          },
          bells: {
            title: 'Campanelli e Tubi',
            subtitle: 'Konguraalar',
            description: '15 tubi metallici e campanelli sulla schiena. Il loro suono crea un ritmo ipnotico durante il movimento.',
          },
          richness: {
            title: 'Ricchezza del Gomito',
            subtitle: 'Shenek Bailaa',
            description: 'Sacchetto di broccato e 9 cinghie di cuoio sulla manica sinistra con tre nastri bianchi.',
          },
        },
      },
      headdress: {
        title: '2. Khamnaar Bort',
        tuvan: '(Copricapo Sciamanico)',
        subtitle:
          '"Il copricapo serve come protezione dagli spiriti maligni e garantisce allo sciamano la doppia vista."',
        details: {
          copperFace: {
            title: 'Volto di Rame',
            tuvan: '(Khola Khaay, Khola Karak)',
            description:
              'Un naso di rame e occhi di rame sono cuciti sulla parte anteriore. Circondati da cerchi di tessuto rosso, danno al copricapo l\'aspetto di una creatura mitica.',
          },
          copperHorns: {
            title: 'Corna di Rame',
            tuvan: '(Ches Myiys)',
            description:
              'Corna di rame stilizzate (~15cm) forgiate da un fabbro. Proteggono dagli spiriti maligni. Storicamente, i copricapi cornuti hanno una profonda tradizione che risale all\'Età del Ferro.',
          },
          eagleFeathers: {
            title: 'Piume d\'Aquila',
            tuvan: '(Sannash)',
            description:
              'La decorazione principale consiste in 40 grandi e 20 piccole piume d\'aquila. Rappresentano gli uccelli—spiriti aiutanti. "Lo spirito dell\'aquila aiuta lo sciamano a volare."',
          },
          blackWings: {
            title: 'Ali Nere',
            tuvan: '(Suuk-Kara)',
            description:
              'Due lunghe piume nere proprio davanti. Agiscono come "pinne" o timoni, aiutando lo sciamano a superare la resistenza dell\'aria durante il suo volo cosmico.',
          },
          fringe: {
            title: 'La Frangia',
            tuvan: '(Borttun Khanazy)',
            description:
              'Il "muro del cappello" copre gli occhi. Tradizionalmente decorato con denti di maral (cervo) o perline e ricami a scacchiera. Nasconde lo sguardo umano dello sciamano agli spiriti.',
          },
        },
      },
      drum: {
        title: '3. Dungur & Orba',
        tuvan: '(Tamburo e Battente)',
        subtitle: '"Il Tamburo è il destriero dello sciamano. Il Battente è la sua frusta. Insieme lo trasportano attraverso i mondi."',
        drumTitle: 'Il Tamburo (Dungur)',
        beaterTitle: 'Il Battente (Orba)',
        drumDetails: {
          frame: {
            title: 'Il Telaio',
            tuvan: '(Rim)',
            description: 'Fatto di legno di larice. Prima di tagliare l\'albero, viene eseguito un rituale per nutrire lo spirito della foresta.',
          },
          skin: {
            title: 'La Pelle',
            tuvan: '(Dungurnun Algyzy)',
            description: 'A seconda della regione, viene utilizzata la pelle di una capra di montagna (*te*), di un cervo maral o di un capriolo.',
          },
          handle: {
            title: 'L\'Impugnatura',
            tuvan: '(Tudazy)',
            description: 'La barra verticale all\'interno. Spesso raffigura l\'uccello mostruoso Khaan-Khereti o lo sciamano stesso.',
          },
          crossbar: {
            title: 'La Traversa',
            tuvan: '(Sheezhep)',
            description: 'Un bastone di salice orizzontale che regge campanelli di bronzo e punte di freccia.',
          },
        },
        beaterDetails: {
          material: {
            title: 'Materiale',
            description: 'Fatto di corno d\'alce (Tuva orientale) o radice di pino/ginepro (Tuva occidentale). Il battente è uno strumento sacro per la divinazione.',
          },
          frontSide: {
            title: 'Lato Anteriore',
            tuvan: '(Orbanyn Arny)',
            description: 'Il lato che colpisce è coperto con la pelle di un orso o di una capra di montagna.',
          },
          backSide: {
            title: 'Lato Posteriore',
            tuvan: '(Orbanyn Arty)',
            description: 'Decorato con intagli (spesso un pino con un uccello) e anelli di metallo. Gli anelli tintinnano, aggiungendo un altro livello di suono.',
          },
          divinationTool: {
            title: 'Strumento di Divinazione',
            description:
              'Il battente viene usato per predire il futuro. Quando lanciato, se atterra con la pelliccia in su, è buona fortuna. Legno in su significa pericolo.',
          },
        },
      },
      nextAction: {
        text: 'Hai studiato l\'armatura. Ora tocca gli strumenti.',
        button: 'Apri l\'Altare →',
      },
    },
    altar: {
      backButton: '← Ritorna ai Vestiti',
      title: 'Attributi Sacri',
      description:
        'Secondo la tradizione tuvana, il potere di uno sciamano risiede nei suoi attributi. Questi non sono semplici oggetti, ma entità viventi — "cavalli" per viaggiare attraverso i mondi e "armature" contro gli spiriti maligni. Esplora gli oggetti qui sotto per imparare i loro significati nascosti.',
      items: {
        orba: {
          name: "Orba (Battente dello Sciamano)",
          description:
            "L'Orba non è solo uno strumento per battere il tamburo, ma uno strumento sacro per la divinazione (Toorek). Lo sciamano lo lancia: se atterra dal lato della pelliccia, è un buon presagio; se dal lato del legno, il pericolo si avvicina. È spesso coperto con la pelle di un caprone e ornato con anelli di metallo che simboleggiano le orecchie dello sciamano.",
        },
        kuzungu: {
          name: 'Kuzungu (Specchio di Bronzo)',
          description:
            'Il Kuzungu è l\'"occhio" dello sciamano. Indossato sul petto, questo specchio di bronzo respinge gli attacchi degli spiriti maligni e riflette il mondo invisibile. Uno sciamano può sciamanizzare senza tamburo, ma mai senza specchio. È lo scudo supremo.',
        },
        bearClaw: {
          name: 'Adyg Eeren (Spirito Orso)',
          description:
            'Un amuleto fatto di artigli d\'orso. L\'orso (Adyg) è lo spirito antenato più potente. Questo Eeren conferisce allo sciamano un\'immensa forza fisica e spirituale per combattere le forze oscure del Mondo Inferiore.',
        },
        arrow: {
          name: "Ydyk O'k (Freccia Sacra)",
          description:
            'La Freccia Sacra attira la buona fortuna (Keshik) e protegge le anime dei membri della famiglia. Non viene mai usata come arma, ma come antenna magica per catturare le benedizioni dal Mondo Superiore.',
        },
        tosKarak: {
          name: 'Tos-Karak (Nove Occhi)',
          description:
            'Un cucchiaio rituale con nove fori usato per spruzzare latte o tè agli spiriti della natura. I nove fori simboleggiano i nove cieli. Viene usato nei rituali mattutini per nutrire i padroni delle montagne e dei fiumi.',
        },
      },
    },
    common: {
      source: 'Fonte:',
      close: '×',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguage = signal<Language>('en');
  public readonly currentLanguage$ = toObservable(this.currentLanguage.asReadonly());
  
  public readonly translations = computed(() => translations[this.currentLanguage()]);

  constructor() {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'it')) {
      this.currentLanguage.set(savedLanguage);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
  }

  getTranslations(): Translations {
    return this.translations();
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations();
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }
}
