import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class StorageService {
  constructor(private powerService: PowerService) {}

  getData() {
    this.powerService.supplypower(30);
    console.log('storage is running on watts 30');
  }
}
