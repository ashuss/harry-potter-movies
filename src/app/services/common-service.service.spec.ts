import { TestBed } from '@angular/core/testing';

import { CommonServiceService } from './common-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockMovieData, mockMoviesArray } from '../mocks/mockMovies';

describe('CommonServiceService', () => {
  let service: CommonServiceService;
  let httpController: HttpTestingController;

  let url = '/movies';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CommonServiceService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call fetchData and return an array of Movies', () => {
    service.fetchData().subscribe((res) => {
      expect(res).toEqual(mockMoviesArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    req.flush(mockMoviesArray);
  });

  it('should call fetchDataById and return the appropriate Movie', () => {
    const id = 'e80d5a37-620e-4be2-92b9-fb1f5262494f';

    service.fetchDataById(id).subscribe((data) => {
      expect(data).toEqual(mockMovieData);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/${id}`,
    });

    req.flush(mockMovieData);
  });



});
