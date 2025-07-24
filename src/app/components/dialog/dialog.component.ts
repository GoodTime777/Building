import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { IContact } from './interfaces/contact.interface';
import { DialogImports } from './imports';
import { Contact } from './models/contact.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  imports: DialogImports,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private snack: MatSnackBar = inject(MatSnackBar);
  protected loading: WritableSignal<boolean> = signal(false);
  protected consent: FormControl = this.fb.control(false, [
    Validators.requiredTrue,
  ]);
  protected readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  protected readonly data = inject<any>(MAT_DIALOG_DATA);
  protected readonly workList: string[] = ['Штукатурка стен', 'Стяжка пола'];

  protected contactForm: FormGroup<
    Record<keyof IContact, FormControl<string>>
  > = null;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: [
        null,
        [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё ]+$')],
      ],
      address: [null],
      tel: [null, [Validators.required]],
      email: [null, [Validators.email]],
      works: [null, [Validators.required]],
      comments: [null, Validators.maxLength(255)],
    }) as FormGroup<Record<keyof IContact, FormControl<string>>>;
  }

  protected async onSubmit(): Promise<void> {
    this.loading.set(true);

    try {
      await emailjs.send(
        'service_hdpeod4',
        'template_oaw11vj',
        new Contact(this.contactForm.value as any) as any,
        {
          publicKey: 'Y2HLhWhQPJYwLgQ0R',
        }
      );

      this.snack.open(
        'Ваша заявка принята! Скоро с Вами свяжутся наши менеджеры',
        null,
        {
          panelClass: 'success-snack',
        }
      );
    } catch (e) {
      this.snack.open('Что-то пошло не так. Попробуйте позднее', null, {
        panelClass: 'error-snack',
      });
    } finally {
      this.loading.set(false);
    }
  }
}
