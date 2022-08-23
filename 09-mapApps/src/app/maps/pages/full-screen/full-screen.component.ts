import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #map {
      width: 100%;
      height: 100%;
    }
  `
  ]
})
export class FullScreenComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-77.06156508878652, -12.067754869424087], // starting position [lng, lat]
      zoom: 15, // starting zoom
      });
      map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
      });
  }

}
