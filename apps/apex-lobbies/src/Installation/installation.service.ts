import { Injectable } from "@nestjs/common";

@Injectable()
export class InstallationService {
  constructor() {}
  async CreateOneClickInstallScript(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
