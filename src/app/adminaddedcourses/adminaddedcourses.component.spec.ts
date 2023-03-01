import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddedcoursesComponent } from './adminaddedcourses.component';

describe('AdminaddedcoursesComponent', () => {
  let component: AdminaddedcoursesComponent;
  let fixture: ComponentFixture<AdminaddedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddedcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
