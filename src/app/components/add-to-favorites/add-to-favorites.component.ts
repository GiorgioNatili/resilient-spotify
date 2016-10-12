import { Component, OnInit, Input } from '@angular/core';
import { FavoritesActions } from '../../actions/favorites.actions';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.sass']
})
export class AddToFavoritesComponent implements OnInit {

  @Input() id: number;

  constructor(private actions: FavoritesActions) { }

  ngOnInit() {
    
    console.log(`AddToFavoritesComponent with id: ${this.id}`);
  }

  add(event: any) {

    this.actions.addItem(event);
  }
}
