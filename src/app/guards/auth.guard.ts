import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {  
  const routePath = route.routeConfig?.path;
  const notAllowedPathsBeforeLogin = ['login', 'register']
  const token = localStorage.getItem('token');

  if (!token && routePath && notAllowedPathsBeforeLogin.includes(routePath)) {
    return true;
  }

  if (!token) {
    return false;
  }

  // If a meowUser is logged
  if (token && routePath && notAllowedPathsBeforeLogin.includes(routePath)) 
    return false;

  return true;
};
