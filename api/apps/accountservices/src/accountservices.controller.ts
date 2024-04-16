import { Controller, Get } from '@nestjs/common';
import { AccountservicesService } from './accountservices.service';

@Controller()
export class AccountservicesController {
  constructor(private readonly accountservicesService: AccountservicesService) {}

  @Get()
  getHello(): string {
    return this.accountservicesService.getHello();
  }
}
