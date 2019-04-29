import { Injectable } from '@angular/core';
//Import HttpClient
import { HttpClient } from '@angular/common/http';
//Import Observable
import { Observable } from 'rxjs';

//Import Apod
import { Apod } from '../models/apod';
import { NgApodConfig } from '../../../config/ng-apod.config';

@Injectable({
  providedIn: 'root'
})
export class ApodService 
{
  private url:string

  constructor
    (
        private http: HttpClient,
        private ngApodConfig: NgApodConfig
    )
    {
      this.url=`https://api.nasa.gov/planetary/apod?api_key=${this.ngApodConfig.key}`;
    }

  //Return an Observable Apod model
  getApod(): Observable<Apod>
  {
    //Make a get request over HTTP
    return this.http.get<Apod>(this.url);
  }
}

