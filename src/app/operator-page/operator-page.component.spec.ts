import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorPageComponent } from './operator-page.component';

describe('OperatorPageComponent', () => {
  let component: OperatorPageComponent;
  let fixture: ComponentFixture<OperatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
