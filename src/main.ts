import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { join } from "path" ;

// const microserviceOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8877,
//   },
// };

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
};
// const microserviceOptions = {
//   transport: Transport.GRPC,
//   options: {
//     package: "app",
//     protoPath: join(__dirname, "../src/app.proto")
//   },
// };

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => {
    console.log("microservice running.");
  });
}

bootstrap();
