import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavContent } from './footer-nav-content';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer-navlinks',
  imports: [CommonModule, RouterModule],
  template: `
  <div class="footer-nav">
    <a class="footer-nav-link">
      {{ footernavContent.title }}
      <div *ngIf="footernavContent.items" class="content">
        <a *ngFor="let item of footernavContent.items" [href]="item.link" class="item">
          {{ item.text }}
        </a>
      </div>
    </a>
  </div>
  `,
  styleUrl: './footer-navlinks.component.scss'
})
export class FooterNavlinksComponent {
  @Input() footernavContent!: FooterNavContent;
}
