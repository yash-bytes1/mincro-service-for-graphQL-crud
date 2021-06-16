import { Controller } from "@nestjs/common";
import { MathService } from "./math.service";
import { GrpcMethod, MessagePattern } from "@nestjs/microservices";

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {
  }

  @MessagePattern('add')
  async accumulate( data: number[]) {
    console.log(data);
    return this.mathService.accumulate(data);
  }

  // @GrpcMethod("AppController", "Accumulate")
  // accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
  //   return {
  //     sum: this.mathService.accumulate(numberArray.data),
  //   };
  // }
}
