import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  ProeedLogin(name: any, role: any) {
    localStorage.setItem('username', name);
    localStorage.setItem('role', role);
    this.router.navigate(['']);
  }
}
