import { StockDto } from '../entities/stock.entity';

export abstract class StockRepository {
  abstract create(data: StockDto): Promise<StockDto>;
  abstract get(): Promise<StockDto[]>;
  abstract getById(id: number): Promise<StockDto>;
  abstract update(id: number, data: StockDto): Promise<StockDto>;
  abstract delete(id: number): Promise<StockDto>;
}
