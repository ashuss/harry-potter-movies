import { BudgetPipe } from './budget.pipe';

describe('BudgetPipe', () => {
  let pipe = new BudgetPipe();

  it('create an instance', () => {
    const pipe = new BudgetPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform budget to formatted string', () => {
    expect(pipe.transform("130")).toBe('$130 million');
  });

});
