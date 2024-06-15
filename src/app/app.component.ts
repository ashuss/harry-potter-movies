import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';
}
