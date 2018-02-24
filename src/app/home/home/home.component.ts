import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from 'leaflet';
import {GamesService} from '../../core/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://api.mapbox.com/styles/v1/mrlafranchi/cjcz1uiq007o02rqvnp6ci22i/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJsYWZyYW5jaGkiLCJhIjoiY2lxNXRwNXY4MDA2amZubTFtZ2Z5MXNtbyJ9.H8gRvs_5m8xiAhEPu9zJPA',
        {
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoibXJsYWZyYW5jaGkiLCJhIjoiY2lxNXRwNXY4MDA2amZubTFtZ2Z5MXNtbyJ9.H8gRvs_5m8xiAhEPu9zJPA'
        })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {
    this.gamesService.getAll().subscribe(data => {
      console.log(data);
    });
  }

}
