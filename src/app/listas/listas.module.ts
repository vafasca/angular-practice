import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ListasComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule
  ]
})
export class ListasModule { }
