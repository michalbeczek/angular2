import {Component} from 'angular2/core';
import {ItemComponent} from './itemComponent';

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
      {title: 'Item 1', price: 120, premium: false},
      {title: 'Item 2', price: 130, premium: false},
      {title: 'Item 2', price: 0, premium: true}
  ];
  constructor() {}
}
