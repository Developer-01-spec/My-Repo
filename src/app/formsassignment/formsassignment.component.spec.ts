import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsassignmentComponent } from './formsassignment.component';

describe('FormsassignmentComponent', () => {
  let component: FormsassignmentComponent;
  let fixture: ComponentFixture<FormsassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsassignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
