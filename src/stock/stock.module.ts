import { Module } from '@nestjs/common';
import { StockService } from './services/stock.service';
import { StockController } from './infrastucture/controller/stock.controller';
import { CommonModule } from '@app/common';
import { StockRepository } from './domain/repository';
import { StockPrismaRepository } from './infrastucture/repository';

@Module({
  imports: [CommonModule],
  controllers: [StockController],
  providers: [
    StockService,
    {
      provide: StockRepository,
      useClass: StockPrismaRepository,
    },
  ],
})
export class StockModule {}
