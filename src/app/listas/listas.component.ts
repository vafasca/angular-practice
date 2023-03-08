import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Item } from '../models/item.interface';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
})
export class ListasComponent implements OnInit {
  items!: Item[];

  constructor(private itemSvc: ItemService) {}

  ngOnInit(): void {
    this.itemSvc
      .getProducts()
      .pipe(tap((itemList: Item[]) => (this.items = itemList)))
      .subscribe();
  }
}
