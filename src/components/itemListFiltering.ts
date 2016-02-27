import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from "angular2/common";

@Component({
  selector: 'product-list-filtering',
  directives: [COMMON_DIRECTIVES],
  template: `
    <input [(ngModel)]="filterString" type="text">
  `
})

export class ItemListFiltering {
  //  public onClick (button:any, input:any) {
  //    console.log(input.value);
  //  }
}
