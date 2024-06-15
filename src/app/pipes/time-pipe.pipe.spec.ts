import { TimePipePipe } from './time-pipe.pipe';

describe('TimePipePipe', () => {
  let pipe = new TimePipePipe(); 
  
  it('create an instance', () => {
    const pipe = new TimePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform minutes to hours and minutes string', () => {
    expect(pipe.transform('152')).toBe('2h 32min');
  });

});
