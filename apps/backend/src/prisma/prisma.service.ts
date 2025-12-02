import { INestApplication, Injectable, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  async enableShutdownHooks(app: INestApplication) {
    (this.$on as unknown as (event: "beforeExit", cb: () => Promise<void>) => void)(
      "beforeExit",
      async () => {
        await app.close();
      }
    );
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
