import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LobbyModuleBase } from "./base/lobby.module.base";
import { LobbyService } from "./lobby.service";
import { LobbyController } from "./lobby.controller";

@Module({
  imports: [LobbyModuleBase, forwardRef(() => AuthModule)],
  controllers: [LobbyController],
  providers: [LobbyService],
  exports: [LobbyService],
})
export class LobbyModule {}
