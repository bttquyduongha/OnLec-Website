import { Injectable } from '@angular/core';
import { MenuContent } from '../../../../layouts/home/hero/menu-hero/menu-content';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'http://localhost:3000/hero';

    constructor() { }

    async getAllMenuHero() : Promise <MenuContent[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getMenuHeroById(id: Number): Promise <MenuContent | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? [];
    }
}
