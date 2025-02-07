import express from 'express';
import {registerUser, loginUser, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

//endpoints for register and login
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits', userAuth, userCredits);   //we need the moddleware to execute this function

export default userRouter;