import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertpipe'
})
export class ConvertpipePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace("-"," ");
  }

}
