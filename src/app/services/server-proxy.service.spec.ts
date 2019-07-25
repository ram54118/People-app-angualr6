import { TestBed, inject } from '@angular/core/testing';

import { ServerProxyService } from './server-proxy.service';

describe('ServerProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerProxyService]
    });
  });

  it('should be created', inject([ServerProxyService], (service: ServerProxyService) => {
    expect(service).toBeTruthy();
  }));
});
