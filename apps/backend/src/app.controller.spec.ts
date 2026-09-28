import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('hello', () => {
    it('should return a greeting message', () => {
      expect(appController.getHello().message).toBe(
        'Hello from the NestJS backend!',
      );
    });
  });

  describe('health', () => {
    it('should report ok', () => {
      expect(appController.getHealth()).toEqual({ status: 'ok' });
    });
  });
});
