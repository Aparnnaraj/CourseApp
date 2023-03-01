import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoursecategoryupdateComponent } from './admincoursecategoryupdate.component';

describe('AdmincoursecategoryupdateComponent', () => {
  let component: AdmincoursecategoryupdateComponent;
  let fixture: ComponentFixture<AdmincoursecategoryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincoursecategoryupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincoursecategoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
