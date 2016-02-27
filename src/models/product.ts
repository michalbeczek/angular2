import { ProductInterface } from './productInterface';

export class Product {
    public title: string = '';
    public price: string = '';
    public premium: boolean = false;
    public tags: Array<String> = [];

    constructor(product: ProductInterface) {
      this.title = product.title;
      this.price = product.price;
      this.premium = product.premium;
      this.tags = product.tags;
    }
}
