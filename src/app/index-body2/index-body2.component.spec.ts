import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBody2Component } from './index-body2.component';

describe('IndexBody2Component', () => {
  let component: IndexBody2Component;
  let fixture: ComponentFixture<IndexBody2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexBody2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
