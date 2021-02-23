import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component';
import { content } from "./shared/routes/content-routes";
import { auth } from "./shared/routes/auth-routes";
import { AuthorizationGuard } from './shared/services/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthorizationGuard],
    children: content
  },
  {
    path: 'prijava',
    canActivate: [AuthorizationGuard],
    children: auth
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
