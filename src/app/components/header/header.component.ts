import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle, } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatMenuModule, MatIconModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  private customBreakpoints: string = '(min-width: 1599px)';
  protected screen: boolean = false;
  protected isCheckboxChecked: boolean = false;
  protected show: boolean = false;

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

protected  menuBurger(): void {
    this.isCheckboxChecked = !this.isCheckboxChecked
    this.show = !this.show
  }

protected  menuBurgerClose(event: Event): void {
    this.isCheckboxChecked = false;
    this.show = false
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}

