import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetsponsorsComponent } from './meetsponsors.component';

describe('MeetsponsorsComponent', () => {
  let component: MeetsponsorsComponent;
  let fixture: ComponentFixture<MeetsponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetsponsorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetsponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
