import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RitualType, ProcedureStep } from './shaman.interface';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-shaman',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './shaman.component.html',
  styleUrl: './shaman.component.scss',
})
export class ShamanComponent implements OnInit {
  ritualTypes: RitualType[] = [];
  procedureSteps: ProcedureStep[] = [];

  constructor(
    private meta: Meta,
    private title: Title,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.title.setTitle('The Semantic Shaman | Explore Tuvan Shamanism');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Interactive exploration of Tuvan Shamanism based on M.B. Kenin-Lopsan. Discover rituals, costumes, and sacred attributes.',
      },
      {
        name: 'keywords',
        content:
          'Tuva, Shamanism, Shaman, Rituals, Kamlanie, Kenin-Lopsan, Shamanic Costume, Drum, Altar',
      },
      { name: 'author', content: 'Aizana' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.loadTranslations();
    
    // Reload translations when language changes
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    const t = this.translationService.getTranslations().shaman;
    const forms = t.formsOfKamlanie;
    const procedure = t.procedureOfKamlanie;

    this.ritualTypes = [
      {
        title: forms.ritualTypes.kuzungulug.title,
        subtitle: forms.ritualTypes.kuzungulug.subtitle,
        description: forms.ritualTypes.kuzungulug.description,
        img: 'img/kuzungu.jpeg',
        source: 'Source: Inst: bubenshamana',
      },
      {
        title: forms.ritualTypes.khomustap.title,
        subtitle: forms.ritualTypes.khomustap.subtitle,
        description: forms.ritualTypes.khomustap.description,
        img: 'img/khomus.jpg',
        source: 'Source: https://kntuva.ru/post/1/1047/',
      },
      {
        title: forms.ritualTypes.derigDungurlug.title,
        subtitle: forms.ritualTypes.derigDungurlug.subtitle,
        description: forms.ritualTypes.derigDungurlug.description,
        img: 'img/dungur.jpg',
        source: 'Source: National Museum of the Republic of Tuva',
      },
      {
        title: forms.ritualTypes.dayaktyg.title,
        subtitle: forms.ritualTypes.dayaktyg.subtitle,
        description: forms.ritualTypes.dayaktyg.description,
        img: 'img/dayak.jpg',
        source: 'Source: National Museum of the Republic of Tuva',
      },
    ];

    this.procedureSteps = [
      {
        title: procedure.steps.calling.title,
        tuvanTitle: procedure.steps.calling.tuvanTitle,
        description: procedure.steps.calling.description,
      },
      {
        title: procedure.steps.lighting.title,
        tuvanTitle: procedure.steps.lighting.tuvanTitle,
        description: procedure.steps.lighting.description,
        hasPhoto: true,
        img: 'img/okurivanie.jpg',
        source: 'Source: Управление Верховного Шамана VK',
      },
      {
        title: procedure.steps.beginning.title,
        tuvanTitle: procedure.steps.beginning.tuvanTitle,
        description: procedure.steps.beginning.description,
      },
      {
        title: procedure.steps.creatingImage.title,
        tuvanTitle: procedure.steps.creatingImage.tuvanTitle,
        description: procedure.steps.creatingImage.description,
      },
      {
        title: procedure.steps.makingOgaalga.title,
        tuvanTitle: procedure.steps.makingOgaalga.tuvanTitle,
        description: procedure.steps.makingOgaalga.description,
      },
      {
        title: procedure.steps.preparation.title,
        tuvanTitle: procedure.steps.preparation.tuvanTitle,
        description: procedure.steps.preparation.description,
      },
      {
        title: procedure.steps.holyWater.title,
        tuvanTitle: procedure.steps.holyWater.tuvanTitle,
        description: procedure.steps.holyWater.description,
      },
      {
        title: procedure.steps.divination.title,
        tuvanTitle: procedure.steps.divination.tuvanTitle,
        description: procedure.steps.divination.description,
        listItems: [
          {
            label: procedure.steps.divination.items.anaa.label,
            text: procedure.steps.divination.items.anaa.text,
          },
          {
            label: procedure.steps.divination.items.uygu.label,
            text: procedure.steps.divination.items.uygu.text,
          },
          {
            label: procedure.steps.divination.items.kyrlan.label,
            text: procedure.steps.divination.items.kyrlan.text,
          },
        ],
      },
      {
        title: procedure.steps.payment.title,
        tuvanTitle: procedure.steps.payment.tuvanTitle,
        description: procedure.steps.payment.description,
      },
      {
        title: procedure.steps.offering.title,
        tuvanTitle: procedure.steps.offering.tuvanTitle,
        description: procedure.steps.offering.description,
      },
    ];
  }
}
