import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastyearComponent } from './lastyear.component';

describe('LastyearComponent', () => {
  let component: LastyearComponent;
  let fixture: ComponentFixture<LastyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
