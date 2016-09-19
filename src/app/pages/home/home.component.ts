import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor() { 

      let nav = <any> navigator;
      if ('serviceWorker' in nav) {

        nav.serviceWorker.register('./service-worker.js')
           .then(function(reg) {

                    console.log('yey!', <any> reg);
           }).catch(function(err) {

                console.log('boo!', <any> err);
        });
      }
  }

  ngOnInit() {
  }

}
