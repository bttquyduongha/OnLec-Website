import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CtaComponent } from './cta/cta.component';
import { HeroComponent } from './hero/hero.component';
import { HowtoComponent } from './howto/howto.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CtaComponent, HeroComponent, HowtoComponent, TestimonialComponent, UsersComponent],
  template: `
  <main class="home">
    <app-hero></app-hero>
    <app-cta></app-cta>
    <app-users></app-users>
    <app-testimonial></app-testimonial>
    <app-howto></app-howto>
  </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
