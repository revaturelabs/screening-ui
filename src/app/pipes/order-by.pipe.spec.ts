import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('return 0 when objects do not equal', () => {
    const pipe = new OrderByPipe();
    const result = pipe.compare('this', 1);
    expect(result).toEqual(0);
  });

  it('return -1 when a less than b', () => {
    const pipe = new OrderByPipe();
    const result = pipe.compare('a', 'b');
    expect(result).toEqual(-1);
  });

  it('return 1 when this is greater than that', () => {
    const pipe = new OrderByPipe();
    const result = pipe.compare('this', 'that');
    expect(result).toEqual(1);
  });
});