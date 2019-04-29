import { Component, OnInit } from '@angular/core';
//1. Import ActivatedRoute
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: Apod;
  date:string;

  constructor
  (
      private apodService: ApodService,
      //2. Inject ActivatedRoute into the constructor
      private router: ActivatedRoute   
  ) { }

  ngOnInit() 
  {
     //3. Subscribe to parameterized route
    this.router.params.subscribe(
      (params) => 
      {
        this.getApod(params['date']);
      }
    );
  }

  getApod(date:string): void
  {

    this.apodService.getApod(date).subscribe(
      (response:any)=>
      {
        this.apod = response;
         //  Update this.date on each API call
        this.date = this.randomDate(new Date(1995,5,16), new Date());

        // Log the results to the JS console
        console.log(this.date);
      }
    );
  }
  randomDate(start, end): string
  {
    let date = new Date
    (
      start.getTime() + Math.random() *
        (end.getTime() - start.getTime())
    );

    return new Date(date).toISOString().slice(0,10);
  }
  
}