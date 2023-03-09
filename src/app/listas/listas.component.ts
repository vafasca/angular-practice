import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  searchTerm: string = '';

  constructor(
    private itemSvc: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['term'] || '';
      this.onSearch(this.searchTerm);
    });
  }

  onSearch(searchTerm: string) {
    console.log('searchTerm:', searchTerm);
  
    if (searchTerm) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { term: searchTerm },
        queryParamsHandling: 'merge',
      });
    }
  
    this.itemSvc
      .getProducts()
      .pipe(
        tap((itemList: Item[]) => {
          console.log('itemList:', itemList);
  
          if (searchTerm) {
            let filteredItems = itemList.filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.price.toString().includes(searchTerm)
            );
            console.log('filteredItems:', filteredItems);
  
            // Si filteredItems está vacío, asigna todos los elementos a la propiedad items
            if (filteredItems.length === 0) {
              this.items = itemList;
            } else {
              this.items = filteredItems;
            }
          } else {
            // Si searchTerm está vacío, asigna todos los elementos a la propiedad items
            this.items = itemList;
          }
        })
      )
      .subscribe();
  }
}
