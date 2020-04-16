import express from "express";
import { signupEndpoint } from "./endpoints/users/signUp";
import { loginEndpoint } from "./endpoints/users/login";
import { getUserDataEndpoint } from "./endpoints/users/getUserData";
import { createRecipeEndpoint } from "./endpoints/recipe/createRecipe";
import { followUserEndpoint } from "./endpoints/users/followUser"
import { getFeedEndpoint } from "./endpoints/feed/getFeed";
import { changePasswordEndpoint } from "./endpoints/users/changePassword";
import { updateUserEndpoint } from "./endpoints/users/updateUser";

const app = express();
app.use(express.json());
app.post('/signup', signupEndpoint);
app.post('/login', loginEndpoint);
app.get('/user', getUserDataEndpoint);
app.post("/user/follow", followUserEndpoint);
app.post("/change/password", changePasswordEndpoint);
app.post("/recipes", createRecipeEndpoint);
app.get("/feed", getFeedEndpoint);
app.post("/update/user", updateUserEndpoint);


export default app;

