import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(arreglo: any[], texto: any): any[] {
 
    if(texto===''){
      return arreglo;
    }

    return arreglo.filter( item => {
          return item.nombre.toLowerCase().includes(texto.toLowerCase())
    });

  }
}
