import {Component, View} from 'angular2/core';
import {ItemComponent} from './itemComponent';
import {Product} from './../models/product';

@Component({
  selector: 'productList',
  directives: [ItemComponent]
})

@View({
  template: `
      <ul>
        <li *ngFor="#product of products">
          <product-item [product]="product"></product-item>
        </li>
      </ul>
  `
})

export class ItemListComponent {
  public products: Array<Object> = [
      new Product({title: 'Item 1', price: '10', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'Item 2', price: '20', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'Item 3', price: '30', premium: true, tags: ['nowy', 'stary']}),
      new Product({title: 'Item 4', price: '40', premium: true, tags: ['nowy', 'stary']}),
  ];
  constructor() {}
}
