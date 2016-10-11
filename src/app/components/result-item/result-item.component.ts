import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.sass']
})
export class ResultItemComponent implements OnInit {

  @Input() artistID: number;
  @Input() trackID: number;
  @Input() artistName: string;
  @Input() trackName: string;
  @Input() thumb: string;

  constructor() { }

  ngOnInit() {

    console.log(`ResultItemComponent is intialized with artistID = ${this.artistID}, trackID = ${this.trackID} and thumbID = ${this.thumb}`);
  }
}
