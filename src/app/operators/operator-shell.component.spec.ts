import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorShellComponent } from './operator-shell.component';

describe('OperatorShellComponent', () => {
  let component: OperatorShellComponent;
  let fixture: ComponentFixture<OperatorShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
