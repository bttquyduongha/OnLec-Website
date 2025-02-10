import { Injectable } from '@angular/core';
import { UsersContent } from '../../../../layouts/home/users/menu-users/userscontent';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';

  constructor() { }

  async getAllUsers() : Promise <UsersContent[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getUserById(id: Number): Promise <UsersContent | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }
}
