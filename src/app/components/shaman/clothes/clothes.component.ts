import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from '../../../services/translation.service';

interface CloakAttribute {
  title: string;
  subtitle: string;
  description: string;
}

interface HeaddressDetail {
  title: string;
  tuvan: string;
  description: string;
}

interface DrumDetail {
  title: string;
  tuvan?: string; 
  description: string;
}

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})
export class ClothesComponent implements OnInit {
  cloakAttributesLeft: CloakAttribute[] = [];
  cloakAttributesRight: CloakAttribute[] = [];
  headdressDetails: HeaddressDetail[] = [];
  drumDetailsLeft: DrumDetail[] = [];
  drumDetailsRight: DrumDetail[] = [];

  constructor(
    private meta: Meta,
    private title: Title,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.title.setTitle('The Semantic Shaman | Explore Tuvan Shamanism');

    this.meta.addTags([
      { name: 'description', content: 'Interactive exploration of Tuvan Shamanism based on M.B. Kenin-Lopsan. Discover rituals, costumes, and sacred attributes.' },
      { name: 'keywords', content: 'Tuva, Shamanism, Shaman, Rituals, Kamlanie, Kenin-Lopsan, Shamanic Costume, Drum, Altar' },
      { name: 'author', content: 'Aizana' },
      { name: 'robots', content: 'index, follow' }
    ]);

    this.loadTranslations();
    
    // Reload translations when language changes
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    const t = this.translationService.getTranslations().clothes;
    const cloak = t.cloak.attributes;
    const headdress = t.headdress.details;
    const drum = t.drum;

    this.cloakAttributesLeft = [
      {
        title: cloak.iyiKaraKuskun.title,
        subtitle: cloak.iyiKaraKuskun.subtitle,
        description: cloak.iyiKaraKuskun.description
      },
      {
        title: cloak.aldyChuuru.title,
        subtitle: cloak.aldyChuuru.subtitle,
        description: cloak.aldyChuuru.description
      },
      {
        title: cloak.manchak.title,
        subtitle: cloak.manchak.subtitle,
        description: cloak.manchak.description
      }
    ];

    this.cloakAttributesRight = [
      {
        title: cloak.snakes.title,
        subtitle: cloak.snakes.subtitle,
        description: cloak.snakes.description
      },
      {
        title: cloak.bells.title,
        subtitle: cloak.bells.subtitle,
        description: cloak.bells.description
      },
      {
        title: cloak.richness.title,
        subtitle: cloak.richness.subtitle,
        description: cloak.richness.description
      }
    ];

    this.headdressDetails = [
      {
        title: headdress.copperFace.title,
        tuvan: headdress.copperFace.tuvan,
        description: headdress.copperFace.description
      },
      {
        title: headdress.copperHorns.title,
        tuvan: headdress.copperHorns.tuvan,
        description: headdress.copperHorns.description
      },
      {
        title: headdress.eagleFeathers.title,
        tuvan: headdress.eagleFeathers.tuvan,
        description: headdress.eagleFeathers.description
      },
      {
        title: headdress.blackWings.title,
        tuvan: headdress.blackWings.tuvan,
        description: headdress.blackWings.description
      },
      {
        title: headdress.fringe.title,
        tuvan: headdress.fringe.tuvan,
        description: headdress.fringe.description
      }
    ];

    this.drumDetailsLeft = [
      {
        title: drum.drumDetails.frame.title,
        tuvan: drum.drumDetails.frame.tuvan,
        description: drum.drumDetails.frame.description
      },
      {
        title: drum.drumDetails.skin.title,
        tuvan: drum.drumDetails.skin.tuvan,
        description: drum.drumDetails.skin.description
      },
      {
        title: drum.drumDetails.handle.title,
        tuvan: drum.drumDetails.handle.tuvan,
        description: drum.drumDetails.handle.description
      },
      {
        title: drum.drumDetails.crossbar.title,
        tuvan: drum.drumDetails.crossbar.tuvan,
        description: drum.drumDetails.crossbar.description
      }
    ];

    this.drumDetailsRight = [
      {
        title: drum.beaterDetails.material.title,
        description: drum.beaterDetails.material.description
      },
      {
        title: drum.beaterDetails.frontSide.title,
        tuvan: drum.beaterDetails.frontSide.tuvan,
        description: drum.beaterDetails.frontSide.description
      },
      {
        title: drum.beaterDetails.backSide.title,
        tuvan: drum.beaterDetails.backSide.tuvan,
        description: drum.beaterDetails.backSide.description
      },
      {
        title: drum.beaterDetails.divinationTool.title,
        description: drum.beaterDetails.divinationTool.description
      }
    ];
  }
}
