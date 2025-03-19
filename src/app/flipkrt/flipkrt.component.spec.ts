import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkrtComponent } from './flipkrt.component';

describe('FlipkrtComponent', () => {
  let component: FlipkrtComponent;
  let fixture: ComponentFixture<FlipkrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
