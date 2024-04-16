import { Injectable } from '@nestjs/common';
import { Categories, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CategoriesCreateInput): Promise<Categories> {
    return this.prisma.categories.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoriesWhereUniqueInput;
    where?: Prisma.CategoriesWhereInput;
    orderBy?: Prisma.CategoriesOrderByWithRelationInput;
  }): Promise<Categories[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.categories.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: Prisma.CategoriesWhereUniqueInput): Promise<Categories | null> {
    return this.prisma.categories.findFirst({
      where: id,
    });
  }

  update(params: {
    where: Prisma.CategoriesWhereUniqueInput;
    data: Prisma.CategoriesUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.categories.update({
      data,
      where,
    });
  }

  remove(where: Prisma.CategoriesWhereUniqueInput): Promise<Categories> {
    return this.prisma.categories.delete({
      where,
    });
  }
}
