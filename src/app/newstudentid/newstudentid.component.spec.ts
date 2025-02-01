import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstudentidComponent } from './newstudentid.component';

describe('NewstudentidComponent', () => {
  let component: NewstudentidComponent;
  let fixture: ComponentFixture<NewstudentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstudentidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstudentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
