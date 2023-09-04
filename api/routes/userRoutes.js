import express from 'express'
import { loginUser } from '../controllers/userControllers.js';
import { validateLogin } from '../middleWare/validateLogin.js';

const router = express.Router();

router.post('/login', validateLogin, loginUser)

export default router;