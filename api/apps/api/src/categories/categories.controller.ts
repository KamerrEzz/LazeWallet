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
import { CategoriesService } from './categories.service';
import { Prisma } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: Prisma.IncomesCreateInput) {
    return this.categoriesService.create(createCategoryDto);
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

    return this.categoriesService.findAll({
      skip: +skip,
      take: +take,
      where: find
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne({
      id
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: Prisma.CategoriesUpdateInput,
  ) {
    return this.categoriesService.update({
      where: {
        id
      },
      data: updateCategoryDto
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove({
      id
    });
  }
}
