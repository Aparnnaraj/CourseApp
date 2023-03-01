import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercourseupdateComponent } from './usercourseupdate.component';

describe('UsercourseupdateComponent', () => {
  let component: UsercourseupdateComponent;
  let fixture: ComponentFixture<UsercourseupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercourseupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercourseupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
