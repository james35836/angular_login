import { CarewellRoutingModule } from './carewell-routing.module';

describe('CarewellRoutingModule', () => {
  let carewellRoutingModule: CarewellRoutingModule;

  beforeEach(() => {
    carewellRoutingModule = new CarewellRoutingModule();
  });

  it('should create an instance', () => {
    expect(carewellRoutingModule).toBeTruthy();
  });
});
