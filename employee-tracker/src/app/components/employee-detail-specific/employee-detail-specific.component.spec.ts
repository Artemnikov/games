import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailSpecificComponent } from './employee-detail-specific.component';

describe('EmployeeDetailSpecificComponent', () => {
  let component: EmployeeDetailSpecificComponent;
  let fixture: ComponentFixture<EmployeeDetailSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
