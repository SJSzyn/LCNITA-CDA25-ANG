import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ArtistListComponent} from './artist-list/artist-list.component';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [
    NgForOf,
    ArtistListComponent,
  ],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {
  @Input() name!: string;
  @Input() photo!: string;

}
