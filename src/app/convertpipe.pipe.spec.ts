import { UpperCasePipe } from '@angular/common';
import { ConvertpipePipe } from './convertpipe.pipe';

describe('ConvertpipePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertpipePipe();
    expect(pipe.transform('iti-mansoura')).toBe('iti mansoura')
  });
  // it('uppercase string'),()=>{
  //   let uppercase=new UpperCasePipe();
  //   expect(uppercase.transform('mansoura')).toBe('MANSOURA')
  // }
});

