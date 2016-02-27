import {Component} from 'angular2/core';
import {ProductInterface} from '../models/productInterface';

@Component({
  selector: 'product-item',
  inputs: ['product'],
  styles: [require('./item.styl')],
  template: `
        {{ product.title }}
        <strong>{{ product.price }}zł</strong>
        <span class="tag" *ngFor="#tag of product.tags">{{ tag }}</span>

  `
})

export class ItemComponent {
  public product: ProductInterface;
}
