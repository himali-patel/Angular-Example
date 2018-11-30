import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-igniting-slider',
  templateUrl: './igniting-slider.component.html',
  styleUrls: ['./igniting-slider.component.css']
})
export class IgnitingSliderComponent implements OnInit {
igniting_slider
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.igniting_slider = this.getSlider();
  }
  getSlider(){
    return this.config.getConfig().igniting_slider;
  }
}
