import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule, Router} from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent, RouterModule ]
})

export class HomeModule {}
