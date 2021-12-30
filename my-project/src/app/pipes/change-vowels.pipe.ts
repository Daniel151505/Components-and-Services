import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeVowels'
})
export class ChangeVowelsPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('a').join('2').split('A').join('2')
    .split('e').join('3').split('E').join('3')
    .split('i').join('1').split('I').join('1')
    .split('o').join('0').split('O').join('0')
    .split('u').join('4').split('U').join('4');
  }

}
