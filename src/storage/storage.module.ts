import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [StorageService],
  imports: [PowerModule],
  exports: [StorageService],
})
export class StorageModule {}
