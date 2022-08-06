import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .container-map {
      width: 100%;
      height: 100%;
    }

    .row {
      background-color: white;
      position: fixed;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      border-radius: 5px;
      z-index: 9999;
      width: 400px;
    }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapTag') divMap!: ElementRef;
  map!: mapboxgl.Map;

  zoomLevel: number = 15;

  constructor() { }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-77.06156508878652, -12.067754869424087], // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    });
  }

  zoomOut(){
    this.map.zoomOut();
  }

  zoomIn(){
    this.map.zoomIn();
  } 
  zoomChange(newZoom: string){
    this.map.zoomTo(Number(newZoom));
  }

}
