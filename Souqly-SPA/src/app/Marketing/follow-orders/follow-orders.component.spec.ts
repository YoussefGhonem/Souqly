import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowOrdersComponent } from './follow-orders.component';

describe('FollowOrdersComponent', () => {
  let component: FollowOrdersComponent;
  let fixture: ComponentFixture<FollowOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
