import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContent } from './menu-content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-hero',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero__icons">
      <div class="icon-group" *ngFor="let icon of menuContent.icons">
        <span class="icon"><img [src]="icon.iconSrc" [alt]="icon.iconAlt"></span>
        <div class="icon-text">
          <span [innerHTML]="icon.text"></span>
          <div class="underline"></div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './menu-hero.component.scss'
})
export class MenuHeroComponent {
 @Input() menuContent!: MenuContent;
}

