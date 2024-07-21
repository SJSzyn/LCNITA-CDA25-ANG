import { Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ArtistsComponent} from './artists/artists.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'artists-component', component: ArtistsComponent },
];
