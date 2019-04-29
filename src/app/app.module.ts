import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

//Import the pipe from node_modules
import { SafePipeModule } from 'safe-pipe';

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
    HttpClientModule, //import HttpClientModule
    SafePipeModule //Add the pipe to your list of imports
  ],
  providers: [
    NgApodConfig //Add as a provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
