import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import  thunk  from 'redux-thunk';
import * as promise from 'redux-promise';
import * as createLogger from 'redux-logger';

/*
 * Services
 */
import { SpotifyService } from './core/services/spotify.service';

/*
 * Actions
 */
import { FavoritesActions } from './actions/favorites.actions'; 
import { SearchActions } from './actions/search.actions'; 

/*
 * Routing
 */
import { routing, appRoutingProviders } from './app.routing';

/*
 * Components
 */
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistsComponent } from './pages/artists/artists.component';

/*
 * Pages
 */
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AttributionComponent } from './components/attribution/attribution.component';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import { ResultItemComponent } from './components/result-item/result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent,
    SearchComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchResultsComponent,
    ArtistsComponent,
    TracksComponent,
    AlbumsComponent,
    AttributionComponent,
    AddToFavoritesComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgReduxModule,
  ],
  providers: [SpotifyService, FavoritesActions, SearchActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
