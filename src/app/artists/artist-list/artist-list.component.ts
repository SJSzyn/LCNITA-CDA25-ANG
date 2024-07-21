import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  @Input() artists: { name: string, photo: string }[] = [];
  @Output() deleteArtist = new EventEmitter<{ name: string, photo: string }>();

  onDelete(artist: { name: string, photo: string }) {
    this.deleteArtist.emit(artist);
  }
}
