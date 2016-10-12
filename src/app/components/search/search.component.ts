import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { SearchActions } from '../../actions/search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {

  private query: string;
  private results: Object;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private actions: SearchActions) {
   }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => { 
        this.query = params['query'] || ''; 
        if (!this.query) {

           let local:any = JSON.parse(localStorage.getItem('ng2-redux/examples/lastSearch'));
            this.query = local.lastSearch
        }    
    });
  }

  submit(query: string): void {
    
    this.query = query;
    this.actions.updateSearch(query);

    this.router.navigate(['search'], { queryParams: { query: query } })
  }
}
