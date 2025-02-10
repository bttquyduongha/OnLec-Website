import { Injectable } from '@angular/core';
import { NavContent } from '../../../layouts/header/navlinks/nav-content';

@Injectable({
  providedIn: 'root'
})
export class NavlinkService {
  url = 'http://localhost:3000/navlinks';

  constructor() { }

  async getAllNavLinks() : Promise <NavContent[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getNavLinkById(id: Number): Promise <NavContent | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }
}
