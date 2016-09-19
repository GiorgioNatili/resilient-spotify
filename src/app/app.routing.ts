import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent as Home } from './pages/home/home.component';
import { PageNotFoundComponent as PageNotFound } from './pages/page-not-found/page-not-found.component';
import { SearchResultsComponent as SearchResults } from './pages/search-results/search-results.component';
import { ArtistsComponent as Artists } from './pages/artists/artists.component';
import { TracksComponent as Tracks } from './pages/tracks/tracks.component';
import { AlbumsComponent as Albums } from './pages/albums/albums.component';

const routes: Routes = [
  { path: '',               component: Home },
  { path: 'search',         component: SearchResults },
  { path: 'artists/:id',    component: Artists },
  { path: 'tracks/:id',     component: Tracks },
  { path: 'albums/:id',     component: Albums },
  { path: '**',             component: PageNotFound }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export const appRoutingProviders: any[] = [

];