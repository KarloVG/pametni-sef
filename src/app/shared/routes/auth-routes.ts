import { Routes } from '@angular/router';

export const auth: Routes = [
  {
    path: '',
    loadChildren: () => import('../../components/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  //TODO: register, forgot pwd etc....
];
