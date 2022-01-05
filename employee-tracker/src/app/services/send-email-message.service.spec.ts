import { TestBed } from '@angular/core/testing';

import { SendEmailMessageService } from './send-email-message.service';

describe('SendEmailMessageService', () => {
  let service: SendEmailMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmailMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
