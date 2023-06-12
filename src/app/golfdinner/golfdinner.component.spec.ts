import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfdinnerComponent } from './golfdinner.component';

describe('GolfdinnerComponent', () => {
  let component: GolfdinnerComponent;
  let fixture: ComponentFixture<GolfdinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfdinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolfdinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
