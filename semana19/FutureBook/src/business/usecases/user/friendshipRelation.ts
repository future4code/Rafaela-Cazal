import { UserGateway } from "../../gateways/userGateway";

export class FriendshipRelationUC {
  constructor(private userGateway: UserGateway) {}
  
  public async execute(input: FriendshipRelationUCInput): Promise<FriendshipRelationUCOutput | undefined>{
    
    await this.userGateway.createFriendShipRelation(input.userId, input.friendId)

    await this.userGateway.createFriendShipRelation(input.friendId, input.userId)

    return {
      message: "Amizade criada com sucesso"
    }
  }
}

export interface FriendshipRelationUCInput {
  userId: string,
  friendId: string
}

export interface FriendshipRelationUCOutput {
  message: string
}