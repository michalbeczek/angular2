import {ProductInterface} from './productInterface';

export class Product {
    title: string;
    price: string;
    premium: boolean;
    tags: Array<String>;

    constructor(title: string, price: string, premium: boolean, tags: Array<String>) {
      this.title = title;
      this.price = price;
      this.premium = premium;
      this.tags = tags;
    }
}
