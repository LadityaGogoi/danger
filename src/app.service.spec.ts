import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('should return "testing" from getHello', () => {
    expect(service.getHello()).toBe('testing');
  });

  it('should return "bye" from getBye', () => {
    expect(service.getBye()).toBe('bye');
  });
});