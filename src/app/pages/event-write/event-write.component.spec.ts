import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWriteComponent } from './event-write.component';

describe('EventWriteComponent', () => {
  let component: EventWriteComponent;
  let fixture: ComponentFixture<EventWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
