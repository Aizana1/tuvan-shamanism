import { Routes } from '@angular/router';
import { AltarComponent } from './components/altar/altar.component';
import { HomeComponent } from './components/home/home.component';
import { ShamanComponent } from './components/shaman/shaman.component';
import { ClothesComponent } from './components/shaman/clothes/clothes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shaman', component: ShamanComponent },
  { path: 'shaman/clothes', component: ClothesComponent },
  { path: 'items', component: AltarComponent }
];
