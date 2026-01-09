import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Login</h1>
    <button (click)="login()">Fake login</button>
  `
})
export class LoginPage {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.http.post<any>('http://localhost:3001/auth/login', {
      email: 'test@test.com',
      password: '123456'
    }).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/tasks']);
    });
  }
}
