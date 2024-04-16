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
import { GoalsService } from './goals.service';
import { Prisma } from '@prisma/client';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(@Body() createGoalDto: Prisma.GoalsCreateInput) {
    return this.goalsService.create(createGoalDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('user') user?: string,
    @Query('id') id?: string,
  ) {
    let find: any = {};
    if (!take) take = 100 as any;
    if (!skip) skip = 0 as any;
    if (user) find.userId = user;
    if (id) find.id = id;
    if (!user) return [];

    return this.goalsService.findAll({
      skip: +skip,
      take: +take,
      where: find,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goalsService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: Prisma.GoalsUpdateInput,
  ) {
    return this.goalsService.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalsService.remove({
      id,
    });
  }
}
