import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScriptsService } from "./scripts.service";

@swagger.ApiTags("scripts")
@common.Controller("scripts")
export class ScriptsController {
  constructor(protected readonly service: ScriptsService) {}

  @common.Post("/scripts/one-click-install.sh")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddOneClickInstallScript(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddOneClickInstallScript(body);
      }
}
