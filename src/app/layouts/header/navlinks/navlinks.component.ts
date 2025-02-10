import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContent } from './nav-content';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navlinks',
  imports: [CommonModule, RouterModule],
  template: `
      <a [href]="navContent.path" class="nav-link">
        {{ navContent.text }}
        <img *ngIf="navContent.icon" [src]="navContent.icon" alt="Icon" />

        <div *ngIf="navContent.children" class="dropdown-content">
          <a *ngFor="let child of navContent.children" [href]="child.path" class="dropdown-item">
            {{ child.text }}
            <img *ngIf="child.icon" [src]="child.icon" alt="Child Icon" />
          </a>
        </div>
      </a>
  `,
  styleUrl: './navlinks.component.scss'
})
export class NavlinksComponent {
  @Input() navContent!: NavContent;
}
