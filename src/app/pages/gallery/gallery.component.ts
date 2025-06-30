import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-gallery',
  imports: [MatIconModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {

}

// @Directive({
//   selector: 'img:not([loading])'
// })
// export class LazyLoadImagesDirective {
//   constructor(el: ElementRef) {
//     el.nativeElement.setAttribute('loading', 'lazy')
//   }
//}