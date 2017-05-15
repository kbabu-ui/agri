import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {StoreModule} from '@ngrx/store'

import { AppComponent } from './app.component';
import { MulchComponent } from './mulch/mulch.component';

import {reducer as mulchReducer} from './mulch/mulch.reducer'

@NgModule({
  declarations: [
    AppComponent,
    MulchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      fields : mulchReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
