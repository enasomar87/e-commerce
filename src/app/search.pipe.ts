import { Pipe, PipeTransform } from '@angular/core';
import { products } from './interface/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:products[] ,searchWord:string): products[] {
    return products.filter( product  => product.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
      );
  }

}
