import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFotoDetailsComponent } from './view-foto-details.component';

describe('ViewFotoDetailsComponent', () => {
  let component: ViewFotoDetailsComponent;
  let fixture: ComponentFixture<ViewFotoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFotoDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewFotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
