import { Module } from '@nestjs/common';
import { StockService } from './services/stock.service';
import { StockController } from './infrastucture/controller/stock.controller';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
