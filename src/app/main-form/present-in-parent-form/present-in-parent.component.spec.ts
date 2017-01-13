/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PresentInParentComponent } from './present-in-parent.component';

describe('PresentInParentComponent', () => {
  let component: PresentInParentComponent;
  let fixture: ComponentFixture<PresentInParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentInParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentInParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
