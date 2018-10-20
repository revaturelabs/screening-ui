import { ArrToStringPipe } from './arr-to-string.pipe';

describe('ToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrToStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform array to string', () => {
    const pipe = new ArrToStringPipe();
    let arr = ['bill', 'ted'];
    expect(pipe.transform(arr)).toEqual('bill, ted');
  });
});
