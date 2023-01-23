import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(num1: number, num2: number) {
    console.log(this.powerService.supplypower(20));
    return `Service is using watts ${num1 + num2}`;
  }
}
