import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GalleryImports } from './imports';
import { GalleryDB } from './db';

@Component({
  selector: 'app-gallery',
  imports: GalleryImports,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryComponent {
  public slides: any = GalleryDB.slides  
}
