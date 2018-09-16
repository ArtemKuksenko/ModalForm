import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ReactiveFormsModule } from '@angular/forms'//ADD

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule//ADD
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
