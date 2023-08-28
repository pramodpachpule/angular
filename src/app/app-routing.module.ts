import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

import { authGuard } from './guard/auth.guard';
import { roleGuard } from './guard/role.guard';
import { UserComponent } from './components/user/user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { childGuard } from './guard/child.guard';
import { LoginComponent } from './components/login/login.component';
import { PreloadService } from './Service/preload.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [roleGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   canActivate: [roleGuard],
  //   canActivateChild: [childGuard],
  //   children: [
  //     { path: 'view', component: ViewUserComponent },
  //     { path: 'edit', component: AddUserComponent },
  //   ],
  // },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
    data: { preload: true },
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
