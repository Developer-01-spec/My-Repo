import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyntraComponent } from './myntra.component';

describe('MyntraComponent', () => {
  let component: MyntraComponent;
  let fixture: ComponentFixture<MyntraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyntraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
