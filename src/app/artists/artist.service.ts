import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {Artist} from '../models/artist.model';


@Injectable({providedIn: 'root'})

export class ArtistService {
  private apiUrl = 'http://localhost:3000/artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist).pipe(
      catchError(this.handleError)
    );
  }

  updateArtist(artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.apiUrl}/${artist.id}`, artist).pipe(
      catchError(this.handleError)
    );
  }

  deleteArtist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Server Error:', error);
    return throwError('Api service localhost 3000 is not running');
  }
}
