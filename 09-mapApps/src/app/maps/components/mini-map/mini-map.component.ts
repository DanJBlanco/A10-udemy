import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styles: [
    `
      div {
        width: 100%;
        height: 150px;
        margin: 0px;
      }
    `
  ]
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat: [number, number] = [0,0];
  @ViewChild('minimap') divMap!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    var map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive:false
      });
      map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
      });

      new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(map);

  }

}
