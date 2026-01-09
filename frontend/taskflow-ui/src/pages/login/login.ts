import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../app/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
