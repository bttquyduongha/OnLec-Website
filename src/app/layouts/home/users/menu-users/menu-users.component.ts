import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContent } from './userscontent';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-users',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="users__logos">
      <img *ngFor="let logo of usersContent.logos" [src]="logo.src" [alt]="logo.alt">
    </div>
  `,
  styleUrl: './menu-users.component.scss'
})
export class MenuUsersComponent {
  @Input() usersContent!: UsersContent;
}
