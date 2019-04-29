import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
//Import LocationStrategy, HashLocationStrategy
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

//Import the pipe from node_modules
import { SafePipeModule } from 'safe-pipe';

// Relative import from the current directory to your PC's file system
import { NgApodConfig } from '../../config/ng-apod.config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //import HttpClientModule
    SafePipeModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) //Add the pipe to your list of imports
  ],
  providers: [
    NgApodConfig, //Add as a provider
    //Update your providers list
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
