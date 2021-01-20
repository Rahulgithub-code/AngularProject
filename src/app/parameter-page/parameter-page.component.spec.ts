import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterPageComponent } from './parameter-page.component';

describe('ParameterPageComponent', () => {
  let component: ParameterPageComponent;
  let fixture: ComponentFixture<ParameterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
