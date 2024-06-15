import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TimePipePipe } from '../../pipes/time-pipe.pipe';
import { BudgetPipe } from '../../pipes/budget.pipe';
import { MovieData } from '../../movieDetails';

@Component({
  selector: 'app-movie-details-display',
  standalone: true,
  imports: [TimePipePipe, BudgetPipe, CommonModule, HttpClientModule],
  templateUrl: './movie-details-display.component.html',
  styleUrl: './movie-details-display.component.css'
})
export class MovieDetailsDisplayComponent implements OnInit {

  http = inject(HttpClient)
  movieDetails!: MovieData;
  imgSrc: string = '';
  showLoader: boolean = true;

  constructor(private commonservice: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('id'));
    let id = (localStorage.getItem('id') as string);
    console.log(id);
    this.commonservice.fetchDataById(id).subscribe(details => {
      console.log(details);
      this.movieDetails = details;
      this.imgSrc = this.movieDetails.poster;
      localStorage.removeItem('id');
      this.showLoader = false;
    })
  }

  goBack() {
    localStorage.removeItem('id');
    this.router.navigate(['/movies']);
  }
}

