import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: (): any => import('./components/home-components/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: (): any => import('./components/login-component/login.module').then(m => m.LoginModule)
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
