import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AboutAuthorComponent } from './about-author/about-author';
import { ContextComponent } from './context/context';
import { SourcesComponent } from './sources/sources';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AboutAuthorComponent, ContextComponent, SourcesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('The Semantic Shaman | Explore Tuvan Shamanism');

    this.meta.addTags([
      { name: 'description', content: 'Interactive exploration of Tuvan Shamanism based on M.B. Kenin-Lopsan. Discover rituals, costumes, and sacred attributes.' },
      { name: 'keywords', content: 'Tuva, Shamanism, Shaman, Rituals, Kamlanie, Kenin-Lopsan, Shamanic Costume, Drum, Altar' },
      { name: 'author', content: 'Aizana' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
}
