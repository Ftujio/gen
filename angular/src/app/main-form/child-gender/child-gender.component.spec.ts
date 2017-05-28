/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildGenderComponent } from './child-gender.component';

describe('ChildGenderComponent', () => {
  let component: ChildGenderComponent;
  let fixture: ComponentFixture<ChildGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
