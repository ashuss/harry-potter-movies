import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../../services/common-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MoviesDetails } from '../../movieDetails';
import { TimePipePipe } from '../../pipes/time-pipe.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';
import { BudgetPipe } from '../../pipes/budget.pipe';


@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TimePipePipe, FilterPipe, FormsModule, BudgetPipe ],
  templateUrl: './all-movies.component.html',
  styleUrl: './all-movies.component.css'
})

export class AllMoviesComponent implements OnInit {
  http = inject(HttpClient)
  moviesList: MoviesDetails[] = [];
  searchText: string = "";
  searchYear!: number;

  constructor(private commonservice: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllMoviesDetails();
  }

  fetchAllMoviesDetails() {
    this.commonservice.fetchData().subscribe((list) => {
      this.moviesList = list;
      console.log(this.moviesList);
    })
  }

  displayMovieDetails(data: MoviesDetails){
    localStorage.setItem('id', data.id);
    this.router.navigate(['/movieDetails']);
  }
}


