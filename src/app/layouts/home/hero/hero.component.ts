import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeroComponent } from "./menu-hero/menu-hero.component";
import { MenuContent } from './menu-hero/menu-content';
import { HeroService } from '../../../core/services/home/hero/hero.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, MenuHeroComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','../home.component.scss']
})
export class HeroComponent {
  menuContentList: MenuContent[] = [];
  menuHeroService: HeroService = inject(HeroService);

  constructor() {
    this.menuHeroService.getAllMenuHero().then((menuContentList: MenuContent[]) => {
      this.menuContentList = menuContentList;
    })
  }
}
