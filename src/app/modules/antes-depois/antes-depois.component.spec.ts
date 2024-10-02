import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesDepoisComponent } from './antes-depois.component';

describe('AntesDepoisComponent', () => {
  let component: AntesDepoisComponent;
  let fixture: ComponentFixture<AntesDepoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntesDepoisComponent]
    });
    fixture = TestBed.createComponent(AntesDepoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
