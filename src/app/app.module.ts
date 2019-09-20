import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
 
import { MenusComponent } from './menus/menus.component';
import { HeaderComponent } from './header/header.component';
 

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularEditorModule, HttpClientModule ],
  declarations: [ AppComponent,  MenusComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
