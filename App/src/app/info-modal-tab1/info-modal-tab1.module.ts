import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoModalTab1Page } from './info-modal-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: InfoModalTab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoModalTab1Page]
})
export class InfoModalTab1PageModule {}
