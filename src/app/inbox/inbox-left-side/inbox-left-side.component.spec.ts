import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxLeftSideComponent } from './inbox-left-side.component';

describe('InboxLeftSideComponent', () => {
  let component: InboxLeftSideComponent;
  let fixture: ComponentFixture<InboxLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
