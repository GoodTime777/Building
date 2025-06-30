import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PriceComponent } from './pages/price/price.component';
import { ServicesComponent } from './pages/services/services.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'price', component: PriceComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', component: PageNotFoundComponent }
];
