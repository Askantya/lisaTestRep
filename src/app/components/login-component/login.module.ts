import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path: '', component:LoginComponent}
];
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent, RouterModule ]
})

export class LoginModule { }
