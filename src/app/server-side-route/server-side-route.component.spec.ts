import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideRouteComponent } from './server-side-route.component';

describe('ServerSideRouteComponent', () => {
  let component: ServerSideRouteComponent;
  let fixture: ComponentFixture<ServerSideRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSideRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
