import { Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

export const DialogImports: Type<unknown>[] = [
  MatFormFieldModule,
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
  MatCheckboxModule,
  RouterLink,
  RouterLinkActive,
];
