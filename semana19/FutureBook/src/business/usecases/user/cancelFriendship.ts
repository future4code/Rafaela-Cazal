import { UserGateway } from "../../gateways/userGateway";

export class CancelFriendshipRelationUC {
  constructor(private userGateway: UserGateway) {}
  
  public async execute(input: CancelFriendshipRelationUCInput): Promise<CancelFriendshipRelationUCOutput | undefined>{
    
    await this.userGateway.cancelFriendShip(input.userId, input.friendId)

    await this.userGateway.cancelFriendShip(input.friendId, input.userId)

    return {
      message: "Amizade desfeita com sucesso"
    }
  }
}

export interface CancelFriendshipRelationUCInput {
  userId: string,
  friendId: string
}

export interface CancelFriendshipRelationUCOutput {
  message: string
}