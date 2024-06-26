import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { Prisma } from '@prisma/client';

@Controller('incomes')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  create(@Body() createIncomeDto: Prisma.IncomesCreateInput) {
    return this.incomeService.create(createIncomeDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('where') where?: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
    @Query('category') category?: string,
    @Query('user') user?: string,
  ) {
    let find: any = {};
    if (category) find.categoryId = category;
    if(!find.date) find.date = {}
    if (start) find.date.gte = start;
    if (end) find.date.lte = end;
    if (user) find.userId = user;
    if (!take) take = 100 as any;
    if (!skip) skip = 0 as any;
    if (!user) return [];

    return this.incomeService.findAll({
      skip: +skip,
      take: +take,
      where: find,
      orderBy: {
        date: 'desc',
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncomeDto: Prisma.IncomesUpdateInput,
  ) {
    return this.incomeService.update({
      data: updateIncomeDto,
      where: {
        id,
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeService.remove({
      id,
    });
  }
}
