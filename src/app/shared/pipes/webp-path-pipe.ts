import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'webp',
  standalone: true
})
export class WebpPathPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\.(jpeg|jpg|png)$/i, '.webp');
  }
}