import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-benefit',
  imports: [MatGridListModule,MatDividerModule],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss'
})
export class BenefitComponent {

}