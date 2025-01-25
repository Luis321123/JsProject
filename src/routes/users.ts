import express from 'express';

import { getAllUsers } from '../controllers/users';
import { register, login, update } from '../controllers/authentication';

export default (router: express.Router) => {
    router.get('/users', getAllUsers),
    router.post('/users', register);
    router.put('/users', update);
    router.post('/users/login', login);
}

