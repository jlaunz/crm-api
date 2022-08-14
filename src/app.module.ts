import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrmModule } from './crm/crm.module';

@Module({
  imports: [
    CrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
