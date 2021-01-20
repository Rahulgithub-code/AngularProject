import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionPageComponent } from './function-page.component';

describe('FunctionPageComponent', () => {
  let component: FunctionPageComponent;
  let fixture: ComponentFixture<FunctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
