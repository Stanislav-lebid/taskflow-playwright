import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Tasks } from '../pages/tasks/tasks';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: 'tasks',
    component: Tasks,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login' },
];
