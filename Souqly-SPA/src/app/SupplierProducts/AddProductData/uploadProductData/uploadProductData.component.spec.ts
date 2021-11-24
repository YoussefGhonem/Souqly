/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadProductDataComponent } from './uploadProductData.component';

describe('UploadProductDataComponent', () => {
  let component: UploadProductDataComponent;
  let fixture: ComponentFixture<UploadProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
