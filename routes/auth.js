import express from 'express';
import { Registrar, Login } from '../controllers/userController.js';

const routerUser = express.Router();

//routerUser.post('/register',Registrar );
routerUser.post('/login', Login);

export default routerUser;
