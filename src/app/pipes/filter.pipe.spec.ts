import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe = new FilterPipe();
  
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
