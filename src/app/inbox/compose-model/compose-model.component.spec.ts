import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeModelComponent } from './compose-model.component';

describe('ComposeModelComponent', () => {
  let component: ComposeModelComponent;
  let fixture: ComponentFixture<ComposeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
