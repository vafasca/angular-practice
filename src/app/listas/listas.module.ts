import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListasComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    FormsModule
  ]
})
export class ListasModule { }
