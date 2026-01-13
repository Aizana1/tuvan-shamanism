import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-context',
  imports: [],
  templateUrl: './context.html',
  styleUrl: './context.scss',
})
export class ContextComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

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
