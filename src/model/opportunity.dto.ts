import { OpportunityStatus } from 'prisma/prisma-client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOpportunityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Opportunity name' })
  name: string;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Customer id' })
  customerId: number;

  @IsEnum(OpportunityStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: OpportunityStatus,
    description: 'opportunity status.',
  })
  status: OpportunityStatus;
}

export class QueryOpportunityDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String, description: 'opportunity name' })
  name: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number, description: 'customer id' })
  customerId: number;

  @IsEnum(OpportunityStatus)
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    enum: OpportunityStatus,
    description: 'opportunity status.',
  })
  status: OpportunityStatus;
}

export class UpdateOpportunityDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String, description: 'update opportunity name' })
  name: string;

  @IsEnum(OpportunityStatus)
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    enum: OpportunityStatus,
    description: 'opportunity status.',
  })
  status: OpportunityStatus;
}

export class DeleteOpportunityDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @ApiPropertyOptional({ type: Number, description: 'Opportunity id' })
  id: number;
}
