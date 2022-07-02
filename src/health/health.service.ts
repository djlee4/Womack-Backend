import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async getHealth() {
    return {
      status: 'OK',
    };
  }
}
