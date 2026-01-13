import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ⬅️ ОЦЕ

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, // ⬅️ ОБОВʼЯЗКОВО для *ngIf
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginPage {
  email = '';
  password = '';
  showPassword = false;
  loading = false;
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loading) return;

    this.error = null;
    this.loading = true;

    this.http
      .post<{ token: string }>('http://localhost:3001/auth/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/tasks']);
          this.loading = false;
        },
        error: () => {
          this.error = 'Невірний email або пароль';
          this.email = '';
          this.password = '';
          this.showPassword = false;
          this.loading = false;
          this.cdr.detectChanges();
        },
      });
  }
}
