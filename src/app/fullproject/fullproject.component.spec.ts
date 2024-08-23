import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullprojectComponent } from './fullproject.component';

describe('FullprojectComponent', () => {
  let component: FullprojectComponent;
  let fixture: ComponentFixture<FullprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
