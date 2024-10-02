import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimenteComponent } from './experimente.component';

describe('ExperimenteComponent', () => {
  let component: ExperimenteComponent;
  let fixture: ComponentFixture<ExperimenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperimenteComponent]
    });
    fixture = TestBed.createComponent(ExperimenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
