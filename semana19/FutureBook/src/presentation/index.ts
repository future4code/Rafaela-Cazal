import express from "express";
import { signupEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { friendshipRelationEndpoint } from "./endpoints/user/friendshipRelation";
import { cancelFriendshipEndpoint } from "./endpoints/user/cancelFriendship";
import { createPostEndpoint } from "./endpoints/post/createPost";

const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint);

app.post('/login', loginEndpoint);

app.post('/user/friends', friendshipRelationEndpoint );

app.delete('/cancel/friends', cancelFriendshipEndpoint);

app.post('/create/post', createPostEndpoint);

export default app;
