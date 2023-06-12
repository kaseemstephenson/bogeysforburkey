import { Component } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Interaction from 'ol/interaction/Interaction.js';
import Collection from 'ol/Collection.js';
import 'ol';
import Control from 'ol/control/Control.js';
import Zoom from 'ol/control/Zoom';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map:any;
  inter:any = new Interaction
  ngOnInit(){
    this.map = new Map({
      controls: [new Zoom()],

     
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-75.719440, 41.3987700]),
        zoom: 15,
      })
    });
    
  }
}
