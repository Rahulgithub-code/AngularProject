import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarPageComponent } from './var-page.component';

describe('VarPageComponent', () => {
  let component: VarPageComponent;
  let fixture: ComponentFixture<VarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
