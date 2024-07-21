import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {
  @Input() artists = [
    { name: 'Artist 1', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 2', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 3', photo: 'https://via.placeholder.com/150' }
  ];
}
