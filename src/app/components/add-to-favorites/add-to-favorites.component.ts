import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../model/track';
import { FavoritesActions } from '../../actions/favorites.actions';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.sass']
})
export class AddToFavoritesComponent implements OnInit {

  @Input() id: number;
  @Input() trackName: string;

  public addOrRemove: string;

  private addMode: boolean;

  constructor(private actions: FavoritesActions) { 

    this.addMode = false;
  }

  ngOnInit() {
    
    console.log(`AddToFavoritesComponent with id: ${this.id}`);
    // 
    this.addOrRemove = 'Add to favorites';
  }

  handler() {

    this.addMode ? this.add() : this.remove();
  }

  add() {

    let item: Track = {id: this.id, name: this.trackName};
    this.actions.addItem(item);
  }

  remove() {

     this.actions.addItem(this.id);
  }
}
