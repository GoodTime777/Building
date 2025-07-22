import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../../../components/dialog/dialog.component';

@Component({
  selector: 'app-cooperation',
  imports: [MatDialogModule],
  templateUrl: './cooperation.component.html',
  styleUrl: './cooperation.component.scss'
})

export class CooperationComponent {
  public readonly dialog = inject(MatDialog);

   openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
