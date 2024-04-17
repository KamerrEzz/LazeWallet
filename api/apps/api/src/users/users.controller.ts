import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string, @Query() query: {start: string, end: string}) {
    console.log(query);
    
    return this.usersService.getTransactions({
      id,
    });
  }
}
