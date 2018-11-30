import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    home_content
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 25,
        },
        density:{
          enable: true,
          value_area: 1000
        },
        color: {
            value: '#ffe4da'
        },
        shape: {
            type: 'circle',
            stroke: { "width": 0, "color": "#ffe4da" },
            polygon: { "nb_sides": 5 },
            image: { "src": "img/github.svg", "width": 100, "height": 100 }
        },
        opacity:{ 
          value: 1,
          random: false, 
          anim: { "enable": true, "speed": 1, "opacity_min": 1, "sync": false } 
      },
      size: {
        value: 5,
        random: false, 
        anim: { "enable": false, "speed": 4, "size_min": 0.3, "sync": false }
       }, 

       line_linked: {
         enable: true,
         distance: 100, 
         color:'#ffe4da',
         opacity: 9, 
         width: 1 
        },

        move: { 
          enable: true,
          speed: 2.5, 
          direction: 'none',
          random: true, 
          straight: false,
          out_mode: 'out', 
          bounce: false, 
          attract: { "enable": false, "rotateX": 4498.141557303954, "rotateY": 5602.948255589136 } 
     
       }, 
       interactivity: { 
         detect_on: "canvas",
         events: { 
           onhover: { "enable": true, "mode": "grab" },
           onclick: { "enable": true, "mode": "push" }, "resize": true },
           modes: { 
                    grab: { "distance": 200,
                    line_linked: { "opacity": 5 }
             }, 
            bubble: {
                  distance: 250, 
                  size: 0, 
                  duration: 2, 
                  opacity: 0,
                  speed: 3 
              },
              repulse: {
                distance: 400, 
                duration: 0.4 
              }, 
              push: { "particles_nb": 4 },
              remove: { "particles_nb": 4 } 
            }
           }, 
           retina_detect: true
      
          }
    };
    this.home_content= this.gethomecontent();

  }

  gethomecontent(){
    return this.config.getConfig().home_content;
  }

}
