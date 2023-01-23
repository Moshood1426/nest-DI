import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplypower(watts: number) {
    return `supplying ${watts} number of power`;
  }
}
