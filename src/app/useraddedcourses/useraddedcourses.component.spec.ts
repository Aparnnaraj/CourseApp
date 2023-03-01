import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedcoursesComponent } from './useraddedcourses.component';

describe('UseraddedcoursesComponent', () => {
  let component: UseraddedcoursesComponent;
  let fixture: ComponentFixture<UseraddedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
