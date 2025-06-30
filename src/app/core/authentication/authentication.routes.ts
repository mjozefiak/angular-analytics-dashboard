import { Routes } from '@angular/router';

export const AUTH_ROUTES = {
   base: 'auth',
   login: 'login',
   register: 'register',
};

export const authRoutes: Routes = [
   {
      path: AUTH_ROUTES.login,
      loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
   },
   {
      path: AUTH_ROUTES.register,
      loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
   },
];
