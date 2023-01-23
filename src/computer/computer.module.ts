import { Module } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { StorageService } from 'src/storage/storage.service';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [CpuService, StorageService],
})
export class ComputerModule {}
