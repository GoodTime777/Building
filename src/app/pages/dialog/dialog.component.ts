import { Component, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
 //   MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, NgForm, FormGroup, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';

import { NgIf } from '@angular/common';

export interface DialogData {
  //animal: string;
}

@Component({
  selector: 'app-dialog',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule, NgIf
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})


export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  applicationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]),
    address: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    works: new FormControl('', [Validators.required])
  });

  workList: string[] = ['Штукатурка стен', 'Стяжка пола'];

  get name() {
    return this.applicationForm.get('name')
  }

  get address() {
    return this.applicationForm.get('address')
  }

  get tel() {
    return this.applicationForm.get('tel')
  }

  get works() {
    return this.applicationForm.get('works')
  }

  onSubmit() {
    console.log(this.applicationForm.value)
  }
 
}
