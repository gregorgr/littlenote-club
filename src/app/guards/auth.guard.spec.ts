import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';

/*
describe('AuthGuard', () => {
  it('should create an instance', () => {
    expect(new AuthGuard()).toBeTruthy();
  });
});

*/

describe('AuthGuard', () => {
/*
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => AuthGuard(...guardParameters));
*/

  const executeGuard: CanActivateFn = (...guardParameters) => {
        const guardInstance = TestBed.inject(AuthGuard); // Create an instance of AuthGuard
        return guardInstance.canActivate(); // ...guardParameters
      };
/*
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
*/
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [AuthGuard] // Add AuthGuard to the providers array
  });
});
  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

