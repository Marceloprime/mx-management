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
    console.log('props', props);
    const stock = new Stock({ create: props });
    return this.stockRepository.create(stock);
  }

  async findAll() {
    return this.stockRepository.getAll();
  }

  async findOne(id: string) {
    return this.stockRepository.getById(id);
  }

  async update(props: StockDto) {
    return this.stockRepository.update(props.id, props);
  }

  async remove(id: string) {
    return this.stockRepository.delete(id);
  }
}
