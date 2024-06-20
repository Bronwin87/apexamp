import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InstallationService } from "./installation.service";

@swagger.ApiTags("installations")
@common.Controller("installations")
export class InstallationController {
  constructor(protected readonly service: InstallationService) {}

  @common.Post("/one-click-install.sh")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOneClickInstallScript(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateOneClickInstallScript(body);
      }
}
