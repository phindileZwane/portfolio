import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Output() state = new EventEmitter<boolean>(false)

  selectedItem: number = 0;
  @Input() menuItems: any;

  @ViewChild('toolbar') toolbar!: MatToolbar

  constructor(private router: Router, private snackBar: MatSnackBar) {
    // this.menuItems.find((item: any, i: number) => {
    //   if (item.route === this.router.url) {
    //     this.selectedItem = i;
    //   }
    // })
  }

  sendState(): void {
    this.state.emit(true)
  }

}
