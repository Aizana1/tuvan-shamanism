import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from '../../services/translation.service';

interface AltarItem {
  id: string;
  name: string;
  description: string;
  img: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
}

@Component({
  selector: 'app-altar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './altar.component.html',
  styleUrls: ['./altar.component.scss'],
})
export class AltarComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    public translationService: TranslationService
  ) {}

  selectedItem: AltarItem | null = null;

  items: AltarItem[] = [];

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
    const t = this.translationService.getTranslations().altar;
    
    this.items = [
      {
        id: 'orba',
        name: t.items.orba.name,
        description: t.items.orba.description,
        img: 'img/orba.png',
        x: 40,
        y: 50,
        width: 180,
        rotate: 15,
      },
      {
        id: 'kuzungu',
        name: t.items.kuzungu.name,
        description: t.items.kuzungu.description,
        img: 'img/mirror1.png',
        x: 70,
        y: 55,
        width: 180,
        rotate: 0,
      },
      {
        id: 'bear-claw',
        name: t.items.bearClaw.name,
        description: t.items.bearClaw.description,
        img: 'img/bear-claws.png',
        x: 15,
        y: 60,
        width: 180,
        rotate: -20,
      },
      {
        id: 'arrow',
        name: t.items.arrow.name,
        description: t.items.arrow.description,
        img: 'img/arrow.png',
        x: 30,
        y: 20,
        width: 220,
        rotate: 45,
      },
      {
        id: 'tos-karak',
        name: t.items.tosKarak.name,
        description: t.items.tosKarak.description,
        img: 'img/tos-karak.png',
        x: 60,
        y: 30,
        width: 120,
        rotate: 10,
      },
    ];
  }

  selectItem(item: AltarItem) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}
