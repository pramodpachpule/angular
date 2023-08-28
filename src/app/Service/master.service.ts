import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}

  IsLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  HaveRoleAccess(menuname: any) {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      return true;
    } else {
      if (menuname == 'contact') {
        return true;
      } else {
        return false;
      }
    }
  }
}
