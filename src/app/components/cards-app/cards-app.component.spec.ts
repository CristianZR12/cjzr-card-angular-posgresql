import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAppComponent } from './cards-app.component';

describe('CardsAppComponent', () => {
  let component: CardsAppComponent;
  let fixture: ComponentFixture<CardsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
