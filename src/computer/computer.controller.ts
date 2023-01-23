import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { StorageService } from 'src/storage/storage.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private storageService: StorageService,
  ) {}

  @Get('/computer')
  run() {
    console.log(this.cpuService.compute(2, 3));
    return this.storageService.getData();
  }
}
