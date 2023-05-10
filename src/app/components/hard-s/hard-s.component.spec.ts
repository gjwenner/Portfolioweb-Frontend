import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSComponent } from './hard-s.component';

describe('HardSComponent', () => {
  let component: HardSComponent;
  let fixture: ComponentFixture<HardSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
