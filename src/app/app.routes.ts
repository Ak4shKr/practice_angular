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
    canActivate:[AuthGuard]
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
        import('./shared/components/login-form/login-form.component').then(
          (m) => m.LoginFormComponent
        ),
    },
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
