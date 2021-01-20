import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPageComponent } from './switch-page.component';

describe('SwitchPageComponent', () => {
  let component: SwitchPageComponent;
  let fixture: ComponentFixture<SwitchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
