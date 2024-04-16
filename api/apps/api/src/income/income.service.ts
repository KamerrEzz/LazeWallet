import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Incomes, Prisma } from '@prisma/client';

@Injectable()
export class IncomeService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.IncomesCreateInput): Promise<Incomes> {
    return this.prisma.incomes.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.IncomesWhereUniqueInput;
    where?: Prisma.IncomesWhereInput;
    orderBy?: Prisma.IncomesOrderByWithRelationInput;
  }): Promise<Incomes[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.incomes.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: Prisma.IncomesWhereUniqueInput): Promise<Incomes | null> {
    return this.prisma.incomes.findFirst({
      where: id,
    });
  }

  update(params: {
    where: Prisma.IncomesWhereUniqueInput;
    data: Prisma.IncomesUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.incomes.update({
      data,
      where,
    });
  }

  remove(where: Prisma.IncomesWhereUniqueInput): Promise<Incomes> {
    return this.prisma.incomes.delete({
      where,
    });
  }
}
