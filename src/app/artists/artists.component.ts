import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistFormComponent} from './artist-form/artist-form.component';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [
    NgForOf,
    ArtistListComponent,
    ArtistFormComponent,
  ],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {
  artists: { name: string, photo: string }[] = [
    { name: 'Artist 1', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 2', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 3', photo: 'https://via.placeholder.com/150' }
  ];

  addArtist(artist: { name: string, photo: string }) {
    this.artists.push(artist);
  }

  deleteArtist(artist: { name: string, photo: string }) {
    this.artists = this.artists.filter(a => a !== artist);
  }
}
