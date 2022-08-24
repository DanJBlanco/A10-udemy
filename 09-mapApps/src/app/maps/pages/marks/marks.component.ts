import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface CustomMarker {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number, number]
}
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styles: [`
  .container-map {
    width: 100%;
    height: 100%;
  }
  .list-group{
    position: fixed;
    top:20px;
    right: 20px;
    z-index: 9999;
  }

  li{
    cursor: pointer;
  }
  `
  ]
})
export class MarksComponent implements AfterViewInit {

  @ViewChild('mapTag') divMap!: ElementRef;
  map!: mapboxgl.Map;

  zoomLevel: number = 15;
  centerMap: [number, number] = [-77.06156508878652, -12.067754869424087];

  // Markers Array
  markers: CustomMarker[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.centerMap, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });

    this.getLocalStorage();

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'HOla MUndo';  

    // const marker = new mapboxgl.Marker({
    //   element: markerHtml
    // })
    // const marker = new mapboxgl.Marker()
    // .setLngLat(this.centerMap)
    // .addTo(this.map);
  }

  goToMarker(marker: mapboxgl.Marker | undefined) {
    this.map.flyTo({
      center: marker!.getLngLat(),
    
    })
    
  }

  addMarker(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color
    })
    .setLngLat(this.centerMap)
    .addTo(this.map);


    this.markers.push(
      {
        color, 
        marker: newMarker
      }
    );


      
    newMarker.on('dragend', () => {
      this.saveMarkerLocalStorage();
    });

    this.saveMarkerLocalStorage();
  }

  saveMarkerLocalStorage(){

    const lngLatArr: CustomMarker[] = [];

    this.markers.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        center: [lng, lat],

      });
    })

    localStorage.setItem('markers',  JSON.stringify(lngLatArr));

  }

  getLocalStorage(){

    if( !localStorage.getItem('markers'))
      return;

    const lngLatArr: CustomMarker[] = JSON.parse( localStorage.getItem('markers')! );

    lngLatArr.forEach( m => {
      const newMarker = new mapboxgl.Marker({
        draggable: true,
        color: m.color,
      })
      .setLngLat(m.center!)
      .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: m.color
      });

      
      newMarker.on('dragend', () => {
        this.saveMarkerLocalStorage();
      });


    });

  }

  deleteMarker(index: number){

    this.markers[index].marker?.remove();
    this.markers.splice(index, 1);
    this.saveMarkerLocalStorage();
    
  }


}
