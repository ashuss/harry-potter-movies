import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MovieDetailsDisplayComponent } from './movie-details-display.component';

describe('MovieDetailsDisplayComponent', () => {
  let component: MovieDetailsDisplayComponent;
  let fixture: ComponentFixture<MovieDetailsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
