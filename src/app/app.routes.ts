import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/pages/about/about').then((m) => m.About),
  },
  {
    path: 'add-todo',
    loadComponent: () => import('../app/pages/add/add').then((m) => m.Add),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('../app/pages/add/add').then((m) => m.Add),
  },

  //   {
  //     path: 'login',
  //     loadComponent: () =>
  //       import('./components/login/login.component').then(
  //         (m) => m.LoginComponent
  //       ),
  //   },
  //   {
  //     path: 'register',
  //     loadComponent: () =>
  //       import('./components/register/register.component').then(
  //         (m) => m.RegisterComponent
  //       ),
  //   },
  //   {
  //     path: 'details/:id',
  //     loadComponent: () =>
  //       import('./components/details/details.component').then(
  //         (m) => m.DetailsComponent
  //       ),
  //   },
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
