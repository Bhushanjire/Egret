import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: '',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
