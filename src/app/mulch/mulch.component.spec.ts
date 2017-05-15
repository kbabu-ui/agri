import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulchComponent } from './mulch.component';

describe('MulchComponent', () => {
  let component: MulchComponent;
  let fixture: ComponentFixture<MulchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
