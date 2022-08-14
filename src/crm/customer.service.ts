import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {
  CreateCustomerDto,
  QueryCustomerDto,
  UpdateCustomerDto,
} from 'src/model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async createCustomer(customerDto: CreateCustomerDto) {
    try {
      const customer = await this.prisma.customer.create({
        data: {
          name: customerDto.name,
          email: customerDto.email,
          status: customerDto.status,
          addressLines: customerDto.addressLines,
          postcode: customerDto.postcode,
        },
      });

      return customer;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('email must be unique');
        }
      }
    }
  }

  async queryCustomer(queryCustomerDto: QueryCustomerDto) {
    try {
      return await this.prisma.customer.findMany({
        where: {
          createdAt: {
            gte: queryCustomerDto.createdFrom,
            lte: queryCustomerDto.createdBefore,
          },
          name: { contains: queryCustomerDto.name },
          email: { contains: queryCustomerDto.email },
          status: queryCustomerDto.status,
        },
        include: {
          opportunities: true,
        },
        orderBy: {
          name: 'desc',
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new InternalServerErrorException('Cannot perform query');
      }
    }
  }

  async updateCustomer(
    customerId: number,
    updateCustomerDto: UpdateCustomerDto,
  ) {
    try {
      const updatedCustomer = await this.prisma.customer.update({
        where: {
          id: customerId,
        },
        data: updateCustomerDto,
      });
      return updatedCustomer;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new NotFoundException('Cannot find any matching record');
        }
      }
    }
  }

  async deleteCustomer(customerId: number) {
    try {
      const updatedCustomer = await this.prisma.customer.delete({
        where: {
          id: customerId,
        },
      });
      return updatedCustomer;
    } catch (err) {
      // To DO: implement it
      throw new InternalServerErrorException('not implemented');
    }
  }
}
