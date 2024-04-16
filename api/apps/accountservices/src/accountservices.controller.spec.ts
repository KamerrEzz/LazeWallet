import { Test, TestingModule } from '@nestjs/testing';
import { AccountservicesController } from './accountservices.controller';
import { AccountservicesService } from './accountservices.service';

describe('AccountservicesController', () => {
  let accountservicesController: AccountservicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountservicesController],
      providers: [AccountservicesService],
    }).compile();

    accountservicesController = app.get<AccountservicesController>(AccountservicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(accountservicesController.getHello()).toBe('Hello World!');
    });
  });
});
