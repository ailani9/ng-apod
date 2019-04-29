import { Injectable } from '@angular/core';
import { NgApodConfig } from '../../../config/ng-apod.config';

@Injectable({
  providedIn: 'root'
})
export class ApodService 
{
  constructor(private ngApodConfig: NgApodConfig) { }

  getApod(): string
  {
    return this.ngApodConfig.key;
  }
}

