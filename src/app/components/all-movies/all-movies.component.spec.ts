import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AllMoviesComponent } from './all-movies.component';
import { CommonServiceService } from '../../services/common-service.service';

describe('AllMoviesComponent', () => {
  let component: AllMoviesComponent;
  let fixture: ComponentFixture<AllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
