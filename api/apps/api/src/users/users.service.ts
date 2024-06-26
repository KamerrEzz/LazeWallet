import { Injectable } from '@nestjs/common';
import { Users, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService){}

  create(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({
      data
    })
  }

  findOne(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findFirst({
      where
    })
  }

  getTransactions(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findFirst({
      where,
      select: {
        Expeses: {
          include: {
            category: {
              select: {
                name: true
              }
            },
          }
        },
        Incomes: {
          include: {
            category: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })
  }
}
