import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxRightSideComponent } from './inbox-right-side.component';

describe('InboxRightSideComponent', () => {
  let component: InboxRightSideComponent;
  let fixture: ComponentFixture<InboxRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
