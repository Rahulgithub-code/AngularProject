import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRouteComponent } from './server-route.component';

describe('ServerRouteComponent', () => {
  let component: ServerRouteComponent;
  let fixture: ComponentFixture<ServerRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
