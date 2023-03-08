import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() item!:Item;
  constructor() { }

  ngOnInit(): void {
  }

}
