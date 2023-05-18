import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SimpleCalculatorComponent } from './simple-calculator.component';
import { CalculatorRepository } from 'src/app/persistence/calculator.repository';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleCalculatorComponent],
      imports: [HttpClientTestingModule],
      providers: [CalculatorRepository],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should get operator', (): void => {
    const operator = '+';
    component.getOperator(operator);

    expect(component.operator).toEqual(operator);
  });

  it('should add', (): void => {
    const start = 1;
    const amount = 2;

    component.add(start, amount);
    expect(component.input).toEqual('3');
  });

  it('should subtract', (): void => {
    const start = 5;
    const amount = 3;

    component.subtract(start, amount);
    expect(component.input).toEqual('2');
  });

  it('should clear input', (): void => {
    component.input = 'invalid input';
    component.operator = '+';
    component.clear();
    expect(component.input).toEqual('0');
    expect(component.operator).toEqual('');
  });
});
