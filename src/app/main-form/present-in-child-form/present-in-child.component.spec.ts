/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PresentInChildComponent } from './present-in-child.component';

describe('PresentInChildComponent', () => {
  let component: PresentInChildComponent;
  let fixture: ComponentFixture<PresentInChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentInChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentInChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
