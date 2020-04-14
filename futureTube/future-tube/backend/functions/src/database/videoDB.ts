import { UserGateway } from "../business/gateways/userGateway";
import { BaseDB } from "./baseDB";
import User from "../business/entities/user";


export class UserDB extends BaseDB implements UserGateway {
  private videosCollection = "videos";


}