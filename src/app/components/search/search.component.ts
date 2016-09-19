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

  submit(query: string): void {
    
    this.query = query;
   //  this.search();
     this.router.navigate(['search'], { queryParams: { query: query } })
 //     .then(_ => this.search() );
  }

  search(): void {

    if (this.query) {

      this.spotify
      .searchTrack(this.query);
     //  .subscribe((res: any) => this.renderResults(res));
    }   
  }
}
