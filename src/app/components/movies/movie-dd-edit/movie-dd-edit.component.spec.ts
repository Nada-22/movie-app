import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDdEditComponent } from './movie-dd-edit.component';

describe('MovieDdEditComponent', () => {
  let component: MovieDdEditComponent;
  let fixture: ComponentFixture<MovieDdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDdEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
