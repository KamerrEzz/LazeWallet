import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountservicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
