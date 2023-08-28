import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  n = of(['pramod']);
  listarry = [{ name: 'pramod', mark: '77' }];

  constructor() {}

  GetData() {
    return this.listarry;
  }

  SaveData(input: any) {
    this.listarry.push(input);
  }
}
