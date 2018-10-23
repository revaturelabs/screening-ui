import { TierPipe } from './tier-pipe';

describe('TierPipe', () => {
  it('create an instance', () => {
    const pipe = new TierPipe();
    expect(pipe).toBeTruthy();
  });

  it('should equal string after _', () => {
    const pipe = new TierPipe();
    const result = pipe.transform('bbb_hhh');
    expect(result).toEqual('hhh');
  });  

  it('should equal string after _', () => {
    const pipe = new TierPipe();
    const result = pipe.transform('sub_string');
    expect(result).toEqual('string');
  }); 
});