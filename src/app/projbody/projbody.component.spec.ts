import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjbodyComponent } from './projbody.component';

describe('ProjbodyComponent', () => {
  let component: ProjbodyComponent;
  let fixture: ComponentFixture<ProjbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
