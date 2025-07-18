import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
//import { DialogComponent } from '../dialog/dialog.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { BackgroundComponent } from "../../core/ui/background/background.component";
import { TruckComponent } from "../../core/ui/truck/truck.component";



@Component({
  selector: 'app-contacts',
  imports: [MatIconModule, MatDialogModule, RouterLink, RouterLinkActive, BackgroundComponent, TruckComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  public readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
