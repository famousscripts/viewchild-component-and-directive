import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcolorComponent } from './cpcolor.component';

describe('CpcolorComponent', () => {
  let component: CpcolorComponent;
  let fixture: ComponentFixture<CpcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
