import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: any): string {
    if (!value || typeof value !== 'object') {
      return '';
    }

    return `${value.nombre} ${value.apellido}`;
  }
}
