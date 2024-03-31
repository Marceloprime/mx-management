import { BaseRepository } from '@app/common/repository';
import { StockRepository } from '../../domain/repository';
import { Stock, StockDto } from '../../domain/entities/stock.entity';

export class StockPrismaRepository
  extends BaseRepository
  implements StockRepository
{
  constructor() {
    super();
  }

  async create(data: Stock) {
    return this.prisma.stock.create({
      data,
    });
  }
  async getAll() {
    return this.prisma.stock.findMany();
  }
  async getById(id: string) {
    return this.prisma.stock.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, data: StockDto) {
    return this.prisma.stock.update({
      where: {
        id,
      },
      data,
    });
  }
  async delete(id: string) {
    return this.prisma.stock.delete({
      where: {
        id,
      },
    });
  }
}
