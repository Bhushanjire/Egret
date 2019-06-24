import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdTableComponent } from './curd-table.component';

describe('CurdTableComponent', () => {
  let component: CurdTableComponent;
  let fixture: ComponentFixture<CurdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
