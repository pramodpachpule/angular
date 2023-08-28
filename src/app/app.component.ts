import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: AuthService) {}
  name: string = 'Pramod';

  SaveEmp(value: any) {
    console.log(value);
  }
}
