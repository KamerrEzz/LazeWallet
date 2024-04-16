import { Injectable } from '@nestjs/common';
import { Expenses, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ExpensesService {

  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ExpensesCreateInput): Promise<Expenses> {
    return this.prisma.expenses.create({
      data
    })
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExpensesWhereUniqueInput;
    where?: Prisma.ExpensesWhereInput;
    orderBy?: Prisma.ExpensesOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.expenses.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: Prisma.ExpensesWhereUniqueInput): Promise<Expenses | null> {
    return this.prisma.expenses.findFirst({
      where: id,
    });
  }

  update(params: {
    where: Prisma.ExpensesWhereUniqueInput;
    data: Prisma.ExpensesUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.expenses.update({
      data,
      where,
    });
  }

  remove(where: Prisma.ExpensesWhereUniqueInput): Promise<Expenses> {
    return this.prisma.expenses.delete({
      where,
    });
  }
}
