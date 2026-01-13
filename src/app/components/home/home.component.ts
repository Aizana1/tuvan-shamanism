import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AboutAuthorComponent } from './about-author/about-author';
import { ContextComponent } from './context/context';
import { SourcesComponent } from './sources/sources';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AboutAuthorComponent, ContextComponent, SourcesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
