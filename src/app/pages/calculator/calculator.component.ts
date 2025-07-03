import { NgIf } from '@angular/common';
import { Component , inject} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../pages/dialog/dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule,MatDialogModule,  NgIf, MatFormFieldModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  areaFloor = new FormControl(1, [Validators.required, Validators.min(1)]);
  widthFloor = new FormControl(6, [Validators.required, Validators.min(6)]);
  priceFloor = 800;
  resultFloor = 0;

  areaWall = new FormControl(1, [Validators.required, Validators.min(1)]);
  priceWall = 750;
  resultWall = 0;



  calculateFloor() {
    if (this.widthFloor.value !== null && this.areaFloor.value !== null) {

      if ((this.widthFloor.value) > 6) {
        this.resultFloor = ((((this.widthFloor.value) - 6) * 150) + this.priceFloor) * (this.areaFloor.value)
      } else {
        this.resultFloor = (this.areaFloor.value) * this.priceFloor
      }
    }

    return this.resultFloor
  }


  calculateWall() {
    if (this.areaWall.value !== null) {
      this.resultWall = this.areaWall.value * this.priceWall
    }

    return this.resultWall
  }

 readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
