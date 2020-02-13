import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExempleComponent } from './ng-class-exemple.component';

describe('NgClassExempleComponent', () => {
  let component: NgClassExempleComponent;
  let fixture: ComponentFixture<NgClassExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
