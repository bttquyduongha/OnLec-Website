import { Injectable } from '@angular/core';
import { StepsContent } from '../../../../layouts/home/howto/steps/steps-content';

@Injectable({
  providedIn: 'root'
})
export class HowtoService {

  url = 'http://localhost:3000/how-to';

  constructor() { }

  async getAllSteps() : Promise <StepsContent[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getStepById(id: Number): Promise <StepsContent | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }
}
