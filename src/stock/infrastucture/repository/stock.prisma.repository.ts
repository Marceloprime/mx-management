import { BaseRepository } from '@app/common/repository';
import { StockRepository } from '../../domain/repository';
import { Stock } from '../../domain/entities/stock.entity';

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
  async get() {
    return this.prisma.stock.findMany();
  }
  async getById(id) {
    return this.prisma.stock.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id, data) {
    return this.prisma.stock.update({
      where: {
        id,
      },
      data,
    });
  }
  async delete(id) {
    return this.prisma.stock.delete({
      where: {
        id,
      },
    });
  }
}
