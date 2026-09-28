import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { HelloResponse } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): HelloResponse {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }
}
