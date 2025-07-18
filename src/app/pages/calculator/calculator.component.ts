
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  readonly dialog = inject(MatDialog);

  protected priceFloor: number = 800;
  protected resultFloor: number = 0;
  protected priceWall: number = 750;
  protected resultWall: number = 0;

  protected floor = new FormGroup({
    areaFloor: new FormControl(1, [Validators.required, Validators.min(1)]),
    widthFloor: new FormControl(6, [Validators.required, Validators.min(6)]),
  })

  protected wall = new FormGroup({
    areaWall: new FormControl(1, [Validators.required, Validators.min(1)]),
  })

  calculateFloor() {
    if (!!this.floor.value.widthFloor && !!this.floor.value.areaFloor) {
      if ((this.floor.value.widthFloor) > 6) {
        this.resultFloor = ((((this.floor.value.widthFloor) - 6) * 150) + this.priceFloor) * (this.floor.value.areaFloor)
      } else {
        this.resultFloor = (this.floor.value.areaFloor) * this.priceFloor
      }
    }

    return this.resultFloor
  }


  calculateWall() {
    if (!!this.wall.value.areaWall) {
      this.resultWall = this.wall.value.areaWall * this.priceWall
    }

    return this.resultWall
  }

  resetFormFloor() {
    this.floor.controls['areaFloor'].setValue(1);
    this.floor.controls['widthFloor'].setValue(6);
    this.resultFloor = 0
  }

  resetFormWall() {
    this.wall.controls['areaWall'].setValue(1);
    this.resultWall = 0
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
