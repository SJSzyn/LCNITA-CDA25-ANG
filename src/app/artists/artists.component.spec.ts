import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsComponent } from './artists.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  const mockArtists = [
    { name: 'Artist 1', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 2', photo: 'https://via.placeholder.com/150' },
    { name: 'Artist 3', photo: 'https://via.placeholder.com/150' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    component.artists = [...mockArtists];
    fixture.detectChanges();
  });

  it('should initialize the artist list correctly', () => {
    expect(component.artists).toEqual(mockArtists);
  });

  it('should display artists correctly in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const artistElements = compiled.querySelectorAll('.artist-item');

    console.log(compiled.innerHTML);
    expect(artistElements.length).toBe(mockArtists.length);

    artistElements.forEach((artistEl, index) => {
      console.log(artistEl.textContent);
      expect(artistEl.querySelector('h2')?.textContent).toContain(mockArtists[index].name);
      expect(artistEl.querySelector('img')?.src).toContain(mockArtists[index].photo);
    });
  });

  it('should delete an artist correctly', () => {
    const artistToDelete = mockArtists[0];
    component.deleteArtist(artistToDelete);
    fixture.detectChanges();
    expect(component.artists.length).toBe(mockArtists.length - 1);
    expect(component.artists.find(artist => artist.name === artistToDelete.name)).toBeUndefined();
  });

  it('should add an artist correctly', () => {
    const newArtist = { name: 'Artist 4', photo: 'https://via.placeholder.com/150' };
    component.addArtist(newArtist);
    fixture.detectChanges();
    expect(component.artists.length).toBe(mockArtists.length + 1);
    expect(component.artists.find(artist => artist.name === newArtist.name)).toEqual(newArtist);
  });
});
