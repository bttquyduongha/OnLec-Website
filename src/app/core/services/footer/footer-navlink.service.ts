import { Injectable } from '@angular/core';
import { FooterNavContent } from '../../../layouts/footer/footer-navlinks/footer-nav-content';

@Injectable({
  providedIn: 'root'
})
export class FooterNavlinkService {
  url = 'http://localhost:3000/footer-navlinks';

  constructor() { }

  async getAllFooterNavLinks() : Promise <FooterNavContent[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getFooterNavLinkById(id: Number): Promise <FooterNavContent | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? [];
    }
}
