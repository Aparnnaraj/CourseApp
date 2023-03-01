import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincourseupdateComponent } from './admincourseupdate.component';

describe('AdmincourseupdateComponent', () => {
  let component: AdmincourseupdateComponent;
  let fixture: ComponentFixture<AdmincourseupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincourseupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincourseupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
