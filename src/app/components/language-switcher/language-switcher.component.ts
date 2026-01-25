import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Language } from '../../app.interface';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  constructor(public translationService: TranslationService) {}

  switchLanguage(language: Language): void {
    this.translationService.setLanguage(language);
  }

  getCurrentLanguage(): Language {
    return this.translationService.getCurrentLanguage();
  }
}
