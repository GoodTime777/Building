import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [MatTabsModule, MatIconModule, MatDialogModule, RouterLink, RouterLinkActive],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {
  protected fTwo(): void {
    console.log('click2')
  }

  public readonly dialog = inject(MatDialog);

   openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}





