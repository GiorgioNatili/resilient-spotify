import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { SpotifyService } from '../../core/services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  private query: string;
  private results: Object;

  constructor(private spotify: SpotifyService, 
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }
}
