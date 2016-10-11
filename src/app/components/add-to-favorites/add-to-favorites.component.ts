import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.sass']
})
export class AddToFavoritesComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
    
    console.log(`AddToFavoritesComponent with id: ${this.id}`);
  }
}
