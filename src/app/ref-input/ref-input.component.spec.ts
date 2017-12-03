/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefInputComponent } from './ref-input.component';

describe('RefInputComponent', () => {
  let component: RefInputComponent;
  let fixture: ComponentFixture<RefInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
