import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CrmController } from './crm.controller';
import { CustomerService } from './customer.service';
import { OpportunityService } from './opportunity.service';

@Module({
  imports: [PrismaModule],
  controllers: [CrmController],
  providers: [CustomerService, OpportunityService]
})
export class CrmModule {}
