import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-about-author',
  imports: [],
  templateUrl: './about-author.html',
  styleUrl: './about-author.scss',
})
export class AboutAuthorComponent implements OnInit {
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
  }
}
