import {Pipe} from 'angular2/core';

@Pipe({
  name: 'search'
})
export class FilterPipe {
  transform(value:any, args:string[]) : any {
    return value.filter((item:any) => {
      if ((typeof item.title === 'string' || item.title instanceof String) &&
          (item.title.indexOf(args[0]) !== -1)) {
            return true;
      }
    })
  }
}
