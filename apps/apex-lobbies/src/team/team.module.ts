import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeamModuleBase } from "./base/team.module.base";
import { TeamService } from "./team.service";
import { TeamController } from "./team.controller";

@Module({
  imports: [TeamModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService],
})
export class TeamModule {}
