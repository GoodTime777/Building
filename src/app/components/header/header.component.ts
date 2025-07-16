import { ChangeDetectionStrategy, Component, OnInit, inject, model, signal, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ServicesComponent } from '../../pages/services/services.component';
//import { ServicesComponent } from '../services/services.component';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from '../../core/ui/dialog/dialog.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatIconModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  public customBreakpoints: string = '(min-width: 1599px)';
  // public customBreakpoints: string = '(min-width: 1024px)';
  public screen: boolean = false;
  public isCheckboxChecked: boolean = false;
  public show: boolean = false;

  public readonly dialog = inject(MatDialog);

  public screenWidth: any;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([this.customBreakpoints]).subscribe(result => {
      if (result.matches) {
        this.screen = true
      } else {
        this.screen = false;
      }
    }
    );
  }

  menuBurger() {
    this.isCheckboxChecked = !this.isCheckboxChecked
    this.show = !this.show
  }

  menuBurgerClose(event: Event) {
    this.isCheckboxChecked = false;
    this.show = false
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}

