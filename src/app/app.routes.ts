import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect từ root (/) đến /home
  { path: 'home', component: HomeComponent }, // Đường dẫn đến HomeComponent
];
