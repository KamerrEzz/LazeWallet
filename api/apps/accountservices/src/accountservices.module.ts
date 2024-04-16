import { Module } from '@nestjs/common';
import { AccountservicesController } from './accountservices.controller';
import { AccountservicesService } from './accountservices.service';

@Module({
  imports: [],
  controllers: [AccountservicesController],
  providers: [AccountservicesService],
})
export class AccountservicesModule {}
