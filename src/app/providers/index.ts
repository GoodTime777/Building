import { Provider } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

export function provideMaterialSettings(): Provider[] {
  return [
    MatSnackBarModule,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      } as MatSnackBarConfig,
    },
  ];
}
