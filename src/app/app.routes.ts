import { Routes } from '@angular/router';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieDetailsDisplayComponent } from './components/movie-details-display/movie-details-display.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "movies",
        pathMatch: "full"
    },
    {
        path: "movies",
        component: AllMoviesComponent
    },
    {
        path: "movieDetails",
        component: MovieDetailsDisplayComponent
    },
    {
        path: "**",
        component: AllMoviesComponent
    }
];
