import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristProfileComponent } from './tourist-profile.component';

describe('TouristProfileComponent', () => {
  let component: TouristProfileComponent;
  let fixture: ComponentFixture<TouristProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
