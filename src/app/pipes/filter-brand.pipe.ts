import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: Brand[], filterBrandText:string): Brand[] {
    filterBrandText=filterBrandText?filterBrandText.toLocaleLowerCase():""
    return filterBrandText?value.filter((c:Brand)=>c.name.toLocaleLowerCase().indexOf(filterBrandText)!==-1):value;
    //return filterText?value.filter((c:Car)=>c.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
