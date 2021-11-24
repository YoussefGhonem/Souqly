import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWithdrawnRequestsComponent } from './manage-withdrawn-requests.component';

describe('ManageWithdrawnRequestsComponent', () => {
  let component: ManageWithdrawnRequestsComponent;
  let fixture: ComponentFixture<ManageWithdrawnRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWithdrawnRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWithdrawnRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
