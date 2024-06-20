import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LobbyServiceBase } from "./base/lobby.service.base";

@Injectable()
export class LobbyService extends LobbyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
