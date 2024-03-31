import { StockDto } from '../entities/stock.entity';

export abstract class StockRepository {
  abstract create(data: StockDto): Promise<StockDto>;
  abstract getAll(): Promise<StockDto[]>;
  abstract getById(id: string): Promise<StockDto>;
  abstract update(id: string, data: StockDto): Promise<StockDto>;
  abstract delete(id: string): Promise<StockDto>;
}
