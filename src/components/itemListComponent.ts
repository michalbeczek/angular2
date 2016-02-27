import {Component, View} from 'angular2/core';
import {ItemComponent} from './itemComponent';
import {Product} from './../models/product';
import {FilterPipe} from './filterPipe';

@Component({
  selector: 'productList',
  directives: [ItemComponent],
  pipes: [FilterPipe],
  template: `
      <input [(ngModel)]="filterString" type="text">
      <ul>
        <li *ngFor="#product of products | search: filterString">
          <product-item [product]="product"></product-item>
        </li>
      </ul>
  `
})

export class ItemListComponent {
  public filterString = '';
  
  public products: Array<Object> = [
      new Product({title: 'Item 1', price: '10', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'SriItem 2', price: '20', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'SriItem 3', price: '30', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'Abc 4', price: '40', premium: true, tags: ['nowy', 'stary']}),
  ];

  constructor() {}
}
