import { Injectable } from '@nestjs/common';
import { Budgets, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BudgetService {
  constructor(private prisma: PrismaService) {}

  create(createBudgetDto: Prisma.BudgetsCreateInput): Promise<Budgets> {
    return this.prisma.budgets.create({
      data: createBudgetDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BudgetsWhereUniqueInput;
    where?: Prisma.BudgetsWhereInput;
    orderBy?: Prisma.BudgetsOrderByWithRelationInput;
  }): Promise<Budgets[] | null> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.budgets.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: Prisma.BudgetsWhereUniqueInput): Promise<Budgets | null> {
    return this.prisma.budgets.findFirst({
      where: id,
    });
  }

  update(params: {
    where: Prisma.BudgetsWhereUniqueInput;
    data: Prisma.BudgetsUpdateInput;
  }): Promise<Budgets> {
    const { where, data } = params;
    return this.prisma.budgets.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BudgetsWhereUniqueInput) {
    return this.prisma.budgets.delete({
      where,
    });
  }
}
