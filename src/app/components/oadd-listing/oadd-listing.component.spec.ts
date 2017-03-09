import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaddListingComponent } from './oadd-listing.component';

describe('OaddListingComponent', () => {
  let component: OaddListingComponent;
  let fixture: ComponentFixture<OaddListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaddListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaddListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
