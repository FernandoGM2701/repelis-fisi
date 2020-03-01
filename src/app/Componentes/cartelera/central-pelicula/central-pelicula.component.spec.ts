import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPeliculaComponent } from './central-pelicula.component';

describe('CentralPeliculaComponent', () => {
  let component: CentralPeliculaComponent;
  let fixture: ComponentFixture<CentralPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
