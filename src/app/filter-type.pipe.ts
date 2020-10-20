import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';
<<<<<<< HEAD
import {ContentListComponent} from './content-list/content-list.component';
=======
>>>>>>> 9fbb0820583a1a17ba49bf1991545c9b79544fb7

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Content[], filterString: string): Content[] {
<<<<<<< HEAD
    return value;
=======
    return null;
>>>>>>> 9fbb0820583a1a17ba49bf1991545c9b79544fb7
  }

}
