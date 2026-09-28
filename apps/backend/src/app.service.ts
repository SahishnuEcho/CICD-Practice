import { Injectable } from '@nestjs/common';

export interface HelloResponse {
  message: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      message: 'Hello from the NestJS backend!',
      timestamp: new Date().toISOString(),
    };
  }
}
