import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsercreationComponent } from './form-usercreation.component';

describe('FormUsercreationComponent', () => {
  let component: FormUsercreationComponent;
  let fixture: ComponentFixture<FormUsercreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUsercreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUsercreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
