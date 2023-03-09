import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    ListasComponent,
    ItemsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    FormsModule
  ]
})
export class ListasModule { }
