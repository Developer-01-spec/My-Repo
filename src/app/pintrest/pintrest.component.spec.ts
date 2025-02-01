import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintrestComponent } from './pintrest.component';

describe('PintrestComponent', () => {
  let component: PintrestComponent;
  let fixture: ComponentFixture<PintrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PintrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
