import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert the value to farenheight
 * Takes an exponent argument converts to farenheight.
 * Usage:
 *   value | kelvinToFar :exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'kelvinToFar'})
export class kelvinToFar implements PipeTransform {
  transform(value: number): number {
    return value * 9/5 - 459.67;
  }
}