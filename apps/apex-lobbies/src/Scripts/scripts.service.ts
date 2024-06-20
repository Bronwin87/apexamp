import { Injectable } from "@nestjs/common";

@Injectable()
export class ScriptsService {
  constructor() {}
  async AddOneClickInstallScript(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
