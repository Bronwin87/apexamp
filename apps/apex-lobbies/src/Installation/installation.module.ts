import { Module } from "@nestjs/common";
import { InstallationService } from "./installation.service";
import { InstallationController } from "./installation.controller";

@Module({
  controllers: [InstallationController],
  providers: [InstallationService],
  exports: [InstallationService],
})
export class InstallationModule {}
