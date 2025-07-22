import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface DialogData {
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
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})


export class DialogComponent {
  protected readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  protected readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  protected applicationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]),
    address: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    works: new FormControl('', [Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue])
  });

  workList: string[] = ['Штукатурка стен', 'Стяжка пола'];

  get name(): any {
    return this.applicationForm.get('name')
  }

  get address(): any {
    return this.applicationForm.get('address')
  }

  get tel(): any {
    return this.applicationForm.get('tel')
  }

  get works(): any {
    return this.applicationForm.get('works')
  }

  get consent(): any {
    return this.applicationForm.get('consent')
  }

  onSubmit(): void {
    console.log(this.applicationForm.value)
  }
}