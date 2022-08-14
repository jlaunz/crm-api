import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import {
    ApiBadRequestResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiOkResponse,
  } from '@nestjs/swagger';
  import {
    CreateCustomerDto,
    QueryCustomerDto,
    UpdateCustomerDto,
  } from 'src/model';
  import {
    CreateOpportunityDto,
    QueryOpportunityDto,
    UpdateOpportunityDto,
  } from 'src/model/opportunity.dto';
  
  import { CustomerService } from './customer.service';
  import { OpportunityService } from './opportunity.service';
  
  @Controller('')
  export class CrmController {
    constructor(
      private customerService: CustomerService,
      private opportunityService: OpportunityService,
    ) {}
  
    @Get('customers')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Customers fetched successfully' })
    queryCustomer(@Query() dto: QueryCustomerDto) {
      return this.customerService.queryCustomer(dto);
    }
  
    @Post('customers')
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({ description: 'Customers created successfully' })
    @ApiBadRequestResponse({
      description: 'mal-formatted payload',
    })
    @ApiForbiddenResponse({
      description: 'Forbidden',
    })
    createCustomer(@Body() dto: CreateCustomerDto) {
      return this.customerService.createCustomer(dto);
    }
  
    @Patch('customers/:id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Customers updated successfully' })
    @ApiBadRequestResponse({
      description:
        "Unable to update Customers info. the request body could contain mal-formatted data",
    })
    updateCustomer(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: UpdateCustomerDto,
    ) {
      return this.customerService.updateCustomer(id, dto);
    }
  
    // Opportunity
  
    @Get('opportunities')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Opportunities fetched successfully' })
    queryOpportunity(@Query() dto: QueryOpportunityDto) {
      return this.opportunityService.queryOpportunity(dto);
    }
  
    @Post('opportunities')
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({ description: 'Opportunity created successfully' })
    @ApiBadRequestResponse({
      description: 'mal-formatted payload',
    })
    @ApiForbiddenResponse({
      description: 'Forbidden',
    })
    createOpportunity(@Body() dto: CreateOpportunityDto) {
      return this.opportunityService.createOpportunity(dto);
    }
  
    @Patch('opportunities/:id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Opportunity updated successfully' })
    @ApiBadRequestResponse({
      description: 'Bad request',
    })
    updateOpportunity(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: UpdateOpportunityDto,
    ) {
      return this.opportunityService.updateOpportunity(id, dto);
    }
  }
  