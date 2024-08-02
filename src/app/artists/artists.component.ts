import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistFormComponent} from './artist-form/artist-form.component';
import {Artist} from '../models/artist.model';
import {ArtistService} from './artist.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [
    NgForOf,
    ArtistListComponent,
    ArtistFormComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] =[];

  newArtist: Artist = { id: 0, name: '', photo: '' };

  selectedArtist: Artist | null = null;

  constructor(private artistService : ArtistService) { }

  ngOnInit() {
    this.loadArtist()
  }

  loadArtist(): void {
    this.artistService.getArtists().subscribe(
      (artists: Artist[]) => this.artists = artists
    )
  }

  addArtist(): void {
    if (this.newArtist.name && this.newArtist.photo) {
      this.artistService.addArtist(this.newArtist).subscribe(
        (artist: Artist) => {
          this.artists.push(artist);
          this.newArtist = { id: 0, name: '', photo: '' };
        },
        (error) => console.error('Error adding artist', error)
      );
    }
  }

  updateArtist(): void {
    if (this.selectedArtist && this.selectedArtist.name && this.selectedArtist.photo) {
      this.artistService.updateArtist(this.selectedArtist).subscribe(
        (updatedArtist: Artist) => {
          const index = this.artists.findIndex(artist => artist.id === updatedArtist.id);
          if (index !== -1) {
            this.artists[index] = updatedArtist;
          }
          this.selectedArtist = null;
        },
        (error) => console.error('Error updating artist', error)
      );
    }
  }

  selectArtist(artist: Artist): void {
    this.selectedArtist = { ...artist }; // Create a copy to edit
  }

  deleteArtist(id: number): void {
    this.artistService.deleteArtist(id).subscribe(
      () => {
        this.artists = this.artists.filter(artist => artist.id !== id);
      },
      (error) => console.error('Error deleting artist', error)
    );
  }
}
