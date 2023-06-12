import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinneronlyComponent } from './dinneronly.component';

describe('DinneronlyComponent', () => {
  let component: DinneronlyComponent;
  let fixture: ComponentFixture<DinneronlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinneronlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinneronlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
