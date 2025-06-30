import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


// import { AboutComponent } from './about/about.component';
// import { CalculatorComponent } from './calculator/calculator.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { PriceComponent } from './price/price.component';
// import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { AboutComponent } from "./about/about.component";
//import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent,RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'building';
}
