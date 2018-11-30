import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-life-at-md',
  templateUrl: './life-at-md.component.html',
  styleUrls: ['./life-at-md.component.css']
  
})
export class LifeAtMdComponent implements OnInit {
  lifeatmultidots = {}
  fortheboxs={}
  constructor(private config:ConfigService , private httpService: HttpClient) { }
  
  arrBirds: string [];

  ngOnInit() {
    this.lifeatmultidots = this.getLifeatMultiudots();
    this.fortheboxs = this.getforthebox();

    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }
    getLifeatMultiudots(){
      return this.config.getConfig().lifeatMultidots;
    }

    getforthebox(){
      return this.config.getConfig().fortheboxs;
    }

}
