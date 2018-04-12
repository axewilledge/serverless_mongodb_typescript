import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {OfferServiceService} from './offer-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    HttpModule
  ],
  providers: [OfferServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
