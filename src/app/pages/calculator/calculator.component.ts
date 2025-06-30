import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  areaFloor = new FormControl(1, [Validators.required]);
  widthFloor = new FormControl(6, [Validators.required]);
  priceFloor = 800;
  resultFloor = 0;

  areaWall = new FormControl(1, [Validators.required]);
  priceWall = 750;
  resultWall = 0;

  calculateFloor() {
    const floorAreaNumber = Number(this.areaFloor.value)
    const floorWidthNumber = Number(this.widthFloor.value)

    const checkAreaNan = Number.isNaN(floorAreaNumber)
    const checkWidthNan = Number.isNaN(floorWidthNumber)

    if (!checkAreaNan  && !checkWidthNan) {
      if (floorWidthNumber < 6) {
        alert("Толщина должна быть от 6см")
      } else if (floorWidthNumber > 6) {
        this.resultFloor = (((floorWidthNumber - 6) * 150) + this.priceFloor) * floorAreaNumber
      } else {
        this.resultFloor = floorAreaNumber * this.priceFloor
      }
    } else {
      alert("Введите число")
    }

    return this.resultFloor
  }


  calculateWall() {
    const wallAreaNumber = Number(this.areaWall.value)

    const checkAreaNan = Number.isNaN(wallAreaNumber)
    if (!checkAreaNan) {
      this.resultWall = wallAreaNumber * this.priceWall
    } else {
      alert("Введите число")
    }

    return this.resultWall
  }
}
