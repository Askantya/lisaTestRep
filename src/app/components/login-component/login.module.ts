import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path: '', component:LoginComponent}
];
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent, RouterModule ]
})

export class LoginModule { }
