import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';
import {ContentListComponent} from './content-list/content-list.component';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Content[], filterString: string): Content[] {
    return value;
  }

}
