import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent, RouterModule ]
})

export class HomeModule {}
