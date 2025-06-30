import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-slider',
  imports: [MatIconModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

}
