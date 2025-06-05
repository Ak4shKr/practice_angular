import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWord',
})
export class ReverseWordPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
