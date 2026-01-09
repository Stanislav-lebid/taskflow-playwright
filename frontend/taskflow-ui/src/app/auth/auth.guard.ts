import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }

  return new Router().parseUrl('/login');
};
