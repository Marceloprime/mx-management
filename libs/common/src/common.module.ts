import { Module } from '@nestjs/common';
import { BaseRepository } from './repository';

@Module({
  providers: [BaseRepository],
  exports: [BaseRepository],
})
export class CommonModule {}
