import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
