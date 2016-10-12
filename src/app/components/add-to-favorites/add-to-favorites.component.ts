import { Component, OnInit, Input } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { rootStore } from '../../store';
import { Track } from '../../model/track';
import { IAppState } from '../../model/appState';
import { FavoritesActions } from '../../actions/favorites.actions';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.sass']
})
export class AddToFavoritesComponent implements OnInit {

  @Input() id: number;
  @Input() trackName: string;

  @select() favorites$: Observable<Track[]>;

  public addOrRemove: string;
  public addMode: boolean;

  constructor(private actions: FavoritesActions,
              private ngRedux: NgRedux<IAppState> ) { 

    this.addMode = true;
    this.addOrRemove = 'Add to favorites';
  }

  ngOnInit() {
    
    console.log(`AddToFavoritesComponent with id: ${this.id}`);
    
    this.favorites$
        .subscribe( favorites => {

                        this.addMode = favorites.every((item: Track) => {
                          return item.id !== this.id;
                        });

                        this.updateLabel();
                    }, 
                    err => {
                      // Log errors if any
                      console.log(err);
                    });
  }

  updateLabel() {

    this.addMode ?  this.addOrRemove = 'Add to favorites' : this.addOrRemove = 'Remove from favorites';
  }

  handler() {

    this.addMode ? this.add() : this.remove();
  }

  add() {

    let item: Track = {id: this.id, name: this.trackName};
    this.actions.addItem(item);
  }

  remove() {

     this.actions.removeItem(this.id);
  }
}
