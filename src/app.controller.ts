import { Controller } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  async accumulate( data: number[]) {
    console.log(data);
    return this.mathService.accumulate(data);
  }
}
