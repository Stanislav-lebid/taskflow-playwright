import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login';
import { TasksPage } from '../pages/tasks/tasks';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
  path: 'login',
  loadComponent: () =>
    import('../pages/login/login').then(m => m.LoginPage),
},
  {
    path: 'tasks',
    component: TasksPage,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
