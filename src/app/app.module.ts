import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

// Relative import from the current directory to your PC's file system
import { NgApodConfig } from '../../config/ng-apod.config';


@NgModule({
  declarations: [
    AppComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //import HttpClientModule
  ],
  providers: [
    NgApodConfig //Add as a provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
