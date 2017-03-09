import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistingComponent } from './olisting.component';

describe('OlistingComponent', () => {
  let component: OlistingComponent;
  let fixture: ComponentFixture<OlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
