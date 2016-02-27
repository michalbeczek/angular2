import {Component} from 'angular2/core';
import {ItemComponent} from './itemComponent';
import {Product} from './../models/product';

@Component({
  selector: 'productList',
  directives: [ItemComponent],
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
      new Product('Item 1', '10', true, ['nowy', 'stary']),
      new Product('Item 2', '20', false, ['używany']),
      new Product('Item 3', '30', false, ['nowy']),
      new Product('Item 4', '40', false, ['używany']),
  ];
  constructor() {}
}
