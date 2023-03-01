import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecategorylistComponent } from './coursecategorylist.component';

describe('CoursecategorylistComponent', () => {
  let component: CoursecategorylistComponent;
  let fixture: ComponentFixture<CoursecategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecategorylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
