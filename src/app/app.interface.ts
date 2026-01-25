export type Language = 'en' | 'it';

export interface Translations {
  home: {
    title: string;
    subtitle: string;
    ctaButton: string;
    credits: string;
    footer: {
      createdBy: string;
      name: string;
      university: string;
      email: string;
      course: string;
      copyright: string;
    };
  };
  aboutAuthor: {
    title: string;
    years: string;
    description1: string;
    description2: string;
    quote: string;
    imageCaption: string;
  };
  context: {
    landOfTuva: {
      title: string;
      description: string;
    };
    livingTradition: {
      title: string;
      description: string;
    };
    projectMission: {
      title: string;
      description: string;
    };
  };
  sources: {
    label: string;
    title: string;
    book1: {
      title: string;
      author: string;
      description: string;
    };
    book2: {
      title: string;
      author: string;
      description: string;
    };
  };
  shaman: {
    backButton: string;
    imageCaption: string;
    title: string;
    subtitle: string;
    formsOfKamlanie: {
      title: string;
      intro: string;
      ritualTypes: {
        kuzungulug: {
          title: string;
          subtitle: string;
          description: string;
        };
        khomustap: {
          title: string;
          subtitle: string;
          description: string;
        };
        derigDungurlug: {
          title: string;
          subtitle: string;
          description: string;
        };
        dayaktyg: {
          title: string;
          subtitle: string;
          description: string;
        };
      };
    };
    procedureOfKamlanie: {
      title: string;
      intro: string;
      steps: {
        calling: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        lighting: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        beginning: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        creatingImage: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        makingOgaalga: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        preparation: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        holyWater: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        divination: {
          title: string;
          tuvanTitle: string;
          description: string;
          items: {
            anaa: {
              label: string;
              text: string;
            };
            uygu: {
              label: string;
              text: string;
            };
            kyrlan: {
              label: string;
              text: string;
            };
          };
        };
        payment: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
        offering: {
          title: string;
          tuvanTitle: string;
          description: string;
        };
      };
    };
    nextButton: string;
  };
  clothes: {
    backButton: string;
    title: string;
    subtitle: string;
    heroDescription: string;
    cloak: {
      title: string;
      tuvan: string;
      subtitle: string;
      attributes: {
        iyiKaraKuskun: {
          title: string;
          subtitle: string;
          description: string;
        };
        aldyChuuru: {
          title: string;
          subtitle: string;
          description: string;
        };
        manchak: {
          title: string;
          subtitle: string;
          description: string;
        };
        snakes: {
          title: string;
          subtitle: string;
          description: string;
        };
        bells: {
          title: string;
          subtitle: string;
          description: string;
        };
        richness: {
          title: string;
          subtitle: string;
          description: string;
        };
      };
    };
    headdress: {
      title: string;
      tuvan: string;
      subtitle: string;
      details: {
        copperFace: {
          title: string;
          tuvan: string;
          description: string;
        };
        copperHorns: {
          title: string;
          tuvan: string;
          description: string;
        };
        eagleFeathers: {
          title: string;
          tuvan: string;
          description: string;
        };
        blackWings: {
          title: string;
          tuvan: string;
          description: string;
        };
        fringe: {
          title: string;
          tuvan: string;
          description: string;
        };
      };
    };
    drum: {
      title: string;
      tuvan: string;
      subtitle: string;
      drumTitle: string;
      beaterTitle: string;
      drumDetails: {
        frame: {
          title: string;
          tuvan: string;
          description: string;
        };
        skin: {
          title: string;
          tuvan: string;
          description: string;
        };
        handle: {
          title: string;
          tuvan: string;
          description: string;
        };
        crossbar: {
          title: string;
          tuvan: string;
          description: string;
        };
      };
      beaterDetails: {
        material: {
          title: string;
          description: string;
        };
        frontSide: {
          title: string;
          tuvan: string;
          description: string;
        };
        backSide: {
          title: string;
          tuvan: string;
          description: string;
        };
        divinationTool: {
          title: string;
          description: string;
        };
      };
    };
    nextAction: {
      text: string;
      button: string;
    };
  };
  altar: {
    backButton: string;
    title: string;
    description: string;
    items: {
      orba: {
        name: string;
        description: string;
      };
      kuzungu: {
        name: string;
        description: string;
      };
      bearClaw: {
        name: string;
        description: string;
      };
      arrow: {
        name: string;
        description: string;
      };
      tosKarak: {
        name: string;
        description: string;
      };
    };
  };
  common: {
    source: string;
    close: string;
  };
}