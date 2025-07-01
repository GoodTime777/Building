import { ChangeDetectionStrategy, Component, inject, model, signal, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ServicesComponent } from '../../pages/services/services.component';
//import { ServicesComponent } from '../services/services.component';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from '../../pages/dialog/dialog.component';



@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatIconModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);
  // leftHidden = "-95%";
  // leftVisible = "2%";
  hidden = "translateY(-100%)";
  visible = "translateY(55%)";
  heightFull = '100vh';
  heightNone = '0vh';
  widthFull = "310px";
  widthNone = "0"
  radiusNone = "0";
  radiusFull = "35%";
  zoom = false;

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  menuBurger() {
    //alert('click')
    this.zoom = !this.zoom
  }
}


