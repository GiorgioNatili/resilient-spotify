import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../core/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {


  private query: string;
  private results: Array<Object>;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {

    console.log("SearchResultsComponent initialized");
  }

  ngOnInit() {

   this.route
      .queryParams
      .subscribe(params => { 

        this.query = params['query'] || ''; 
        this.search();
      });
  }

  search(): void {

    if (!this.query) {
      
      this.router.navigate(['search']);
    } else {

    this.spotify
      .searchTrack(this.query)
      .subscribe((res: any) => this.renderResults(res));

    }
  }

  renderResults(res: any): void {

    this.results = null;

    if (res && res.tracks && res.tracks.items) {

      this.results = res.tracks.items;
    }
  }
}
