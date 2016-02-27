import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ItemListComponent} from './components/itemListComponent';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: ItemListComponent }
])
export class App {}
