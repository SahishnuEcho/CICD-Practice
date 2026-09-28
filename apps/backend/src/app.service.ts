import { Injectable } from '@nestjs/common';

export interface HelloResponse {
  message: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return {
      message: 'Hello from the NestJS backend! This is to test the CI part of CI/CD...',
      timestamp: new Date().toISOString(),
    };
  }
}
