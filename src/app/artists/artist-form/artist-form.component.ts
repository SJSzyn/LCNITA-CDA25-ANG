import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './artist-form.component.html',
  styleUrl: './artist-form.component.scss'
})
export class ArtistFormComponent {

  @Output() addArtist = new EventEmitter<{ name: string, photo: string }>();
  artistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.artistForm.valid) {
      this.addArtist.emit(this.artistForm.value);
      this.artistForm.reset();
    }
  }
}
