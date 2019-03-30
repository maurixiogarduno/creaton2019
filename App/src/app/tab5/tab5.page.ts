import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  // title: string = 'My first AGM project';
  lat: number = 19.370503;
  lng: number = -99.264125;


  constructor() { }

  ngOnInit() {
  }

}
