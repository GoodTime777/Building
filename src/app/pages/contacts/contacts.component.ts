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
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-contacts',
  imports: [MatIconModule, MatDialogModule,  RouterLink, RouterLinkActive],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

}
