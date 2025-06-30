import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './core/authentication/authentication.routes';

export const routes: Routes = [
   {
      path: AUTH_ROUTES.base,
      loadChildren: () => import('./core/authentication/authentication.routes').then(m => m.authRoutes),
   },
];
