import { TestBed } from '@angular/core/testing';

import { LoggenInterceptor } from './loggen.interceptor';

describe('LoggenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoggenInterceptor = TestBed.inject(LoggenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
