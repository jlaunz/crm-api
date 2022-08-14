import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {
  CreateOpportunityDto,
  QueryOpportunityDto,
  UpdateOpportunityDto,
} from 'src/model/opportunity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OpportunityService {
  constructor(private prisma: PrismaService) {}
  async createOpportunity(dto: CreateOpportunityDto) {
    try {
      const opportunity = await this.prisma.opportunity.create({
        data: {
          name: dto.name,
          customerId: dto.customerId,
          status: dto.status,
        },
      });

      return opportunity;
    } catch (err) {
      console.error(err)
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2003') {
          throw new BadRequestException('Cannot find corresponding Customer');
        } else {
          throw new InternalServerErrorException('request failed');
        }
      }
    }
  }

  async queryOpportunity(dto: QueryOpportunityDto) {
    return await this.prisma.opportunity.findMany({
      where: {
        name: { contains: dto.name },
        status: dto.status,
        customerId: dto.customerId,
      },
      orderBy: {
        name: 'desc',
      },
    });
  }

  async updateOpportunity(opportunityId: number, dto: UpdateOpportunityDto) {
    try {
      const updatedOpportunity = await this.prisma.opportunity.update({
        where: {
          id: opportunityId,
        },
        data: dto,
      });
      return updatedOpportunity;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new NotFoundException('Cannot find any matching record');
        } else {
          throw new InternalServerErrorException('request failed');
        }
      }
    }
  }

  async deleteOpportunity(opportunityId: number) {
    try {
      await this.prisma.opportunity.delete({
        where: {
          id: opportunityId,
        },
      });
      return null;
    } catch (err) {
      // To DO: implement this
      throw new BadRequestException('not implemented');
    }
  }
}
