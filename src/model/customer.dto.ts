import {
    IsDate,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CustomerStatus } from '@prisma/client';
  
  export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Customer first name' })
    name: string;
  
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Customer first name' })
    email: string;
  
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Customer address' })
    addressLines: string;
  
    // ToDO: implement validation
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Customer post code' })
    postcode: string;
  
    @IsEnum(CustomerStatus)
    @IsNotEmpty()
    @ApiProperty({
      enum: CustomerStatus,
      description: 'customer status.',
    })
    status: CustomerStatus;
  }
  
  export class UpdateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional({ type: String, description: 'Customer first name' })
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional({ type: String, description: 'Customer address' })
    addressLines: string;
  
    // TO-DO: implement validation
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional({ type: String, description: 'Customer post code' })
    postcode: string;
  
    @IsEnum(CustomerStatus)
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional({
      enum: CustomerStatus,
      description: 'customer status.',
    })
    status: CustomerStatus;
  }
  
  export class QueryCustomerDto {
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
      type: String,
      description:
        'Find customers whose name contains provided string.',
    })
    name: string;
  
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
      type: String,
      description:
        'Find customers by email',
    })
    email: string;
  
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({
      type: String,
      description: 'Format: yyyy-mm-dd. Find customers that are created after the provided date',
    })
    createdFrom: Date;
  
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({
      type: String,
      description: 'Format: yyyy-mm-dd. Find customers who are created before the provided date',
    })
    createdBefore: Date;
  
    @IsEnum(CustomerStatus)
    @IsOptional()
    @ApiPropertyOptional({ enum: CustomerStatus, description: 'customer status.' })
    status: CustomerStatus;
  }
  
  export class DeleteCustomerDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiPropertyOptional({ type: Number, description: 'Customer id' })
    id: number;
  }
  