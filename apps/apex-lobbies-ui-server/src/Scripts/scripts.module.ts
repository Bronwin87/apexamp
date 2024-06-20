import { Module } from "@nestjs/common";
import { ScriptsService } from "./scripts.service";
import { ScriptsController } from "./scripts.controller";
import { ScriptsResolver } from "./scripts.resolver";

@Module({
  controllers: [ScriptsController],
  providers: [ScriptsService, ScriptsResolver],
  exports: [ScriptsService],
})
export class ScriptsModule {}
