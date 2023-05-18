import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ModalService } from './modal.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let debugComponent: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ModalService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    debugComponent = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render calculator component', () => {
    const calc: any = debugComponent.query(By.css('simple-calculator'));
    expect(calc).toBeTruthy();
  });
});
