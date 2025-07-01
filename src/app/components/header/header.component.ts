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
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatIconModule, MatDialogModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);
  isCheckboxChecked = false;
  // leftHidden = "-95%";
  // leftVisible = "2%";
  hidden = "translateY(-100vh)";
  visible = "translateY(55%)";
  heightFull = '100vh';
  widthFull = "310px";
  radiusFull = "35%";
  valueNone = "0"

  zoom = false;

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  menuBurger() {
    this.isCheckboxChecked = true;  
    this.zoom = !this.zoom

  }

  menuBurgerClose() {  
    this.isCheckboxChecked = false;
    this.zoom = false
  }

}


