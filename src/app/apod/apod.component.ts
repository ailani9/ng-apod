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

        //5. Log the results to the JS console
        console.log(response);
      }
    );

  }

}