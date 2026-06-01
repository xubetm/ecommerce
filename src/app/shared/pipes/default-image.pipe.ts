import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true,
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string | null | undefined): string {
    return imageUrl || 'assets/images/defecto.webp';
  }
}
