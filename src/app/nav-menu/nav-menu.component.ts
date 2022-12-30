import { Component, VERSION } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nav-menu-app',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  private items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Open', icon: 'pi pi-download' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' },
        ],
      },
    ];
  }
}
