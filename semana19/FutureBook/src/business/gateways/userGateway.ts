import { User } from "../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<void>
    getUserByEmail(email: string): Promise<User | undefined>
    getUserById(id: string): Promise<User | undefined>
    createFriendShipRelation(userId: string, friendId: string): Promise<void>
    cancelFriendShip(userId: string, friendId: string): Promise<void> 
}