import { Injectable } from '@nestjs/common';
import { Goals, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.GoalsCreateInput): Promise<Goals> {
    return this.prisma.goals.create({
      data,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GoalsWhereUniqueInput;
    where?: Prisma.GoalsWhereInput;
    orderBy?: Prisma.GoalsOrderByWithRelationInput;
  }): Promise<Goals[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.goals.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(id: Prisma.GoalsWhereUniqueInput): Promise<Goals | null> {
    return this.prisma.goals.findFirst({
      where: id,
    });
  }

  update(params: {
    where: Prisma.GoalsWhereUniqueInput;
    data: Prisma.GoalsUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.goals.update({
      data,
      where,
    });
  }

  remove(where: Prisma.GoalsWhereUniqueInput): Promise<Goals> {
    return this.prisma.goals.delete({
      where,
    });
  }
}
