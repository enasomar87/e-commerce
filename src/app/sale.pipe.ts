import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(pname: string): string {
    return `flash sale ${pname}`;
  }

}
