import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.sass']
})
export class AttributionComponent implements OnInit {

  @Input() album: any;

  constructor() { }

  ngOnInit() {
  }

}
