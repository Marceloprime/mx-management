import { Module } from '@nestjs/common';
import { StockModule } from './stock/stock.module';
import { StockRepository } from './stock/domain/repository';
import { StockPrismaRepository } from './stock/infrastucture/repository';

@Module({
  imports: [StockModule],
  controllers: [],
  providers: [{ provide: StockRepository, useClass: StockPrismaRepository }],
})
export class AppModule {}
