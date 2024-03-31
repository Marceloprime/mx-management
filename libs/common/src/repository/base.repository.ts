import { PrismaClient } from '@prisma/client';

export class BaseRepository {
  public prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
}
