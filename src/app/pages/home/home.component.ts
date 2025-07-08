import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SliderComponent } from './components/slider/slider.component';
import { CooperationComponent } from './components/cooperation/cooperation.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-home',
  imports: [ TechnologiesComponent, SliderComponent, CooperationComponent, BenefitComponent, AdvantageComponent, BackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
