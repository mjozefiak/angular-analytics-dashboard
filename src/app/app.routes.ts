import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './features/auth/auth.routes';

export const routes: Routes = [
   {
      path: AUTH_ROUTES.base,
      loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes),
   },
];
