import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopPageComponent } from './loop-page.component';

describe('LoopPageComponent', () => {
  let component: LoopPageComponent;
  let fixture: ComponentFixture<LoopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
