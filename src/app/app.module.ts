import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuModule } from 'primeng/menu';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MenuModule],
  declarations: [AppComponent, NavMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
