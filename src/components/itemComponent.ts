import {Component} from 'angular2/core';

@Component({
  selector: 'product-item',
  inputs: ['product'],
  template: `
        {{ product.title }}
        <strong>{{ product.price }}zł</strong>
  `
})

export class ItemComponent {
  public product;
}
