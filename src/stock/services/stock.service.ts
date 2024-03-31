import { Injectable } from '@nestjs/common';
import {
  StockDto,
  StockCreateDto,
  Stock,
} from '../domain/entities/stock.entity';
import { StockRepository } from '../domain/repository';

@Injectable()
export class StockService {
  constructor(private readonly stockRepository: StockRepository) {}

  async create(props: StockCreateDto) {
    const stock = new Stock(props);
    return this.stockRepository.create(stock);
  }

  findAll() {
    return `This action returns all stock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
