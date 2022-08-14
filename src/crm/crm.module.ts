import { Module } from '@nestjs/common';
import { CrmController } from './crm.controller';
import { CustomerService } from './customer.service';
import { OpportunityService } from './opportunity.service';

@Module({
  controllers: [CrmController],
  providers: [CustomerService, OpportunityService]
})
export class CrmModule {}
