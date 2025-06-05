import { Routes } from '@angular/router';
import { AuthGuard } from './utils/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../app/pages/about/about').then((m) => m.About),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-todo',
    loadComponent: () => import('../app/pages/add/add').then((m) => m.Add),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('../app/pages/add/add').then((m) => m.Add),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('../app/pages/login/login').then((m) => m.LoginComponent),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./components/not-found/not-found.component').then(
  //         (m) => m.NotFoundComponent
  //       ),
  //   },
];
