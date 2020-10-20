import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';
import {ContentListComponent} from './content-list/content-list.component';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(contentList: Content[], type: string): any{
    return contentList.filter(t => t.type.includes(type));
  }
  // transform(value: Content[], filterString: string): Content[] {
  //  return value;
  // }
  //
  // transform(value: Content[], filterString: string): Content[] {
  //  return value.type || 'Food';
  // }

}
