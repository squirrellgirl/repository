import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { RefInputComponent } from './ref-input/ref-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    RefInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
