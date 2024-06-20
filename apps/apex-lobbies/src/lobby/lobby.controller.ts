import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LobbyService } from "./lobby.service";
import { LobbyControllerBase } from "./base/lobby.controller.base";

@swagger.ApiTags("lobbies")
@common.Controller("lobbies")
export class LobbyController extends LobbyControllerBase {
  constructor(
    protected readonly service: LobbyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
