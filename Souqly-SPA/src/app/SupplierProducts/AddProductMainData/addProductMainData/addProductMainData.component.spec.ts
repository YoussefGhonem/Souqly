/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddProductMainDataComponent } from './addProductMainData.component';

describe('AddProductMainDataComponent', () => {
  let component: AddProductMainDataComponent;
  let fixture: ComponentFixture<AddProductMainDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductMainDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
