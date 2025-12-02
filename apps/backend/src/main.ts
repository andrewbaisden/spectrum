import "reflect-metadata";

import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication
} from "@nestjs/platform-fastify";
import fastifyCors from "@fastify/cors";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  await app.register(fastifyCors as any, {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"]
  });

  const port = process.env.PORT || 4000;
  await app.listen({ port: Number(port), host: "127.0.0.1" });
}

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
