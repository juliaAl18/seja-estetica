import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBotoxComponent } from './modal-botox.component';

describe('ModalBotoxComponent', () => {
  let component: ModalBotoxComponent;
  let fixture: ComponentFixture<ModalBotoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBotoxComponent]
    });
    fixture = TestBed.createComponent(ModalBotoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
