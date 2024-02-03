import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { TokenService } from './token.service';
import { UserServiceService } from './user-service.service';
import { ServerNameService } from './server-name.service';

describe('UserServiceService', () => {

  let serverNameService: ServerNameService;

  let service: UserServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserServiceService],
    });

    service = TestBed.inject(UserServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get token', () => {
    const testToken = 'testToken';
    service.setToken(testToken);

    expect(service.getToken()).toEqual(testToken);
  });

  it('should send a POST request', () => {
    const testData = { key: 'value' };
    const testUrl = serverNameService.getServerName() + 'xlogin/';

    service.postRequest(testUrl, testData).subscribe((response) => {
      expect(response).toBeTruthy(); // Adjust this based on your expected response
    });

    const req = httpTestingController.expectOne(testUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${service.getToken()}`);

    req.flush({ /* your mock response */ });
  });

  /*
  it('should create an instance', () => {
    expect(new UserServiceService(..)).toBeTruthy();
  });
  */
});
