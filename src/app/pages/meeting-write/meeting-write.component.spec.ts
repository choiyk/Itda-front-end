import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingWriteComponent } from './meeting-write.component';

describe('MeetingWriteComponent', () => {
  let component: MeetingWriteComponent;
  let fixture: ComponentFixture<MeetingWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
