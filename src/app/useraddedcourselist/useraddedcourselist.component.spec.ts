import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedcourselistComponent } from './useraddedcourselist.component';

describe('UseraddedcourselistComponent', () => {
  let component: UseraddedcourselistComponent;
  let fixture: ComponentFixture<UseraddedcourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedcourselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedcourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
