import * as graphql from "@nestjs/graphql";
import { ScriptsService } from "./scripts.service";

export class ScriptsResolver {
  constructor(protected readonly service: ScriptsService) {}

  @graphql.Mutation(() => String)
  async AddOneClickInstallScript(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddOneClickInstallScript(args);
  }
}
