import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slibling1Component } from './sibling1.component';

describe('Slibling1Component', () => {
  let component: Slibling1Component;
  let fixture: ComponentFixture<Slibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Slibling1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
